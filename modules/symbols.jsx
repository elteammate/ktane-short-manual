// noinspection JSXNamespaceValidation


function Symbols() {
    const version = React.useContext(VersionContext);

    const image = {
        "v2-rus": "assets/symbols-ru.png",
        "v1-eng": "assets/symbols-eng.png",
    }[version]

    return <Cell>
        <CellBody>
            <CellTitle>Символы</CellTitle>
            <CellImage src={image}></CellImage>
        </CellBody>
    </Cell>;
}
