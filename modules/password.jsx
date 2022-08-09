// noinspection JSXNamespaceValidation


function Password() {
    const version = React.useContext(VersionContext)

    const words = {
        "v2-rus": (
            "аллея бомба вверх взрыв внизу " +
            "вьюга горох готов густо давай " +
            "давно книга конец лилия линия " +
            "можно назад нравы песец песня " +
            "порох порыв потом право пусто " +
            "румба скоро супер травы тумба " +
            "тунец фугас шприц щипок щипцы"
        ).split(" "),
        "v1-eng": (
            "about after again below could " +
            "every first found great house " +
            "large learn never other place " +
            "plant point right small sound " +
            "spell still study their there " +
            "these thing think three water " +
            "where which world would write"
        ).split(" "),
    }[version];

    const [x, y] = {
        "v2-rus": [0, 4],
        "v1-eng": [0, 3],
    }[version];

    return <Cell>
        <CellBody>
            <CellTitle>Пароли</CellTitle>
            <Sections>
                <Section>
                    <Table chunkSize={5}>
                        {words.sort((l, r) => (l[x] + l[y]).localeCompare(r[x] + r[y])).map((word, i) => <tr key={i}>
                            <td className="px-1 text-center">{word[x]}</td>
                            <td className="px-1 text-center">{word[y]}</td>
                            <td className="px-1 text-center">{word}</td>
                        </tr>)}
                    </Table>
                    <div className="text-center">(Символы {x + 1} и {y + 1})</div>
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/password.png" size={150}></CellImage>
    </Cell>;
}