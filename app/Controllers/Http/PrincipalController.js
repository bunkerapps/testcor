'use strict'

class PrincipalController {
    async wordCircle({ request, response }) {
        //receive an array of words
        const { data } = request.all()
        let dataNormalized = data.replace(/'/g, '"')

        let words = JSON.parse(dataNormalized)
        let processed = [words[0]]
        let unprocessed = words
        //check if the words can be processed
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

        //at this point the circle has been validated, process begins
        while (unprocessed.length !== 0) {
            unprocessed.map((wordProcessing) => {
                let lastWordLastLetter = processed[processed.length - 1].slice(-1)
                let firstLetterProcessing = wordProcessing.slice(0, 1)
                if (processed.includes(wordProcessing)) {
                        unprocessed.splice(wordProcessing, 1)
                }
                if (firstLetterProcessing == lastWordLastLetter) {
                    processed.push(wordProcessing)
                }
                return processed
            })
        }
        // add first word at the end

        //TODO generate and formate the file
        processed.push(processed[0])
        console.log(processed)
        response.send(processed)
    }
}

module.exports = PrincipalController
