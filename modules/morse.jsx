// noinspection JSXNamespaceValidation


function Morse() {
    const version = React.useContext(VersionContext);

    const letters = {
        "А": ".-",
        "Б": "-...",
        "В": ".--",
        "Г": "--.",
        "Д": "-..",
        "Е": ".",
        "Ж": "...-",
        "З": "--..",
        "И": "..",
        "Й": ".---",
        "К": "-.-",
        "Л": ".-..",
        "М": "--",
        "Н": "-.",
        "О": "---",
        "П": ".--.",
        "Р": ".-.",
        "С": "...",
        "Т": "-",
        "У": "..-",
        "Ф": "..-.",
        "Х": "....",
        "Ц": "-.-.",
        "Ч": "---.",
        "Ш": "----",
        "Щ": "--.-",
        "Ъ": "--.--",
        "Ь": "-..-",
        "Ы": "-.--",
        "Э": "..-..",
        "Ю": "..--",
        "Я": ".-.-",
        "": " ",
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "V": "...-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--..",
    };

    const words = {
        "v2-rus": {
            "ТОКАРЬ": "3.505",
            "МОСТИК": "3.515",
            "ВЕНОК": "3.522",
            "БРАТЬ": "3.532",
            "КЛАРА": "3.535",
            "ПОПЕЙ": "3.542",
            "ВИТОК": "3.545",
            "ВОСТОК": "3.552",
            "ВИЛКА": "3.555",
            "ПОРОК": "3.565",
            "КОЙКА": "3.572",
            "РОКЕР": "3.575",
            "ПОМОЙ": "3.582",
            "ПОКОЙ": "3.592",
            "БОРИС": "3.595",
            "ПОРОГ": "3.600",
        },
        "v1-eng": {
            "shell": "3.505",
            "halls": "3.515",
            "slick": "3.522",
            "trick": "3.532",
            "boxes": "3.535",
            "leaks": "3.542",
            "strobe": "3.545",
            "bistro": "3.552",
            "flick": "3.555",
            "bombs": "3.565",
            "break": "3.572",
            "brick": "3.575",
            "steak": "3.582",
            "sting": "3.592",
            "vector": "3.595",
            "beats": "3.600",
        },
    }[version];

    const wordsP1 = Object.keys(words).filter(w => letters[w[0].toUpperCase()][0] === ".");
    const wordsP2 = Object.keys(words).filter(w => letters[w[0].toUpperCase()][0] === "-");

    const generate = part => (<Table>
        {part.map(word => [word, word]).map(
            ([word, f]) => [[...word].map(
                letter => letters[letter.toUpperCase()],
            ), f]).sort(
            ([w1, f1], [w2, f2]) => -w1.join(" ").localeCompare(w2.join(" ")),
        ).map(([word, f]) => {
            if (word.length === 5) word.push("");
            return [word, f];
        }).map(([word, f]) => (
            <tr key={word}>
                <td>{f}</td>
                {
                    word.map((letter, i) =>
                        <td key={i}>{letter.replaceAll(".", "•").replaceAll("-", "‒").replaceAll("", " ")}</td>)
                }
                <td>{words[f]}</td>
            </tr>
        ))}
    </Table>);

    return <Cell>
        <CellBody>
            <CellTitle>Морзе</CellTitle>
            <Sections>
                <Section>
                    {generate(wordsP1)}
                </Section>
                <Section>
                    {generate(wordsP2)}
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/morse.png" size={150}></CellImage>
    </Cell>;
}