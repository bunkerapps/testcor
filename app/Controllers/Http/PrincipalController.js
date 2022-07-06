'use strict'

class PrincipalController {
    async wordCircle({ request, response }) {
        const { data } = request.all()
        let dataNormalized = data.replace(/'/g, '"')
        let words = JSON.parse(dataNormalized)
        let proccesed = [words[0]]
        let unproccesed = words

        let firstLetters = []
        let lastLetters = []
        words.map((word) => {
            let wordFirstLetter = word.slice(0, 1)
            let wordLastLetter = word.slice(-1)
            firstLetters.push(wordFirstLetter)
            lastLetters.push(wordLastLetter)
        })
        const notCircle = lastLetters.filter((cadaFinal) => {
            return !firstLetters.includes(cadaFinal)
        })
        if (notCircle.length > 0) return "rejected"

        while (unproccesed.length !== 0) {
            unproccesed.map((wordProccesing) => {
                let lastWordLastLetter = proccesed[proccesed.length - 1].slice(-1)
                let firstLetterProccesing = wordProccesing.slice(0, 1)

                if (proccesed.includes(wordProccesing)) {
                        unproccesed.splice(wordProccesing, 1)
                }
                if (firstLetterProccesing == lastWordLastLetter) {
                    proccesed.push(wordProccesing)
                }
                return proccesed
            })
        }
        // add first word at the end
        proccesed.push(proccesed[0])
        console.log(proccesed)
        response.send(proccesed)
    }
}

module.exports = PrincipalController
