// noinspection JSXNamespaceValidation

function WireSequences() {
    const version = React.useContext(VersionContext)
    const locale = {
        "v2-rus": {'A': 'А', 'B': 'Б', 'C': 'В'},
        "v1-eng": {'A': 'A', 'B': 'B', 'C': 'C'},
    }[version]

    const translate = (s) => s.replace('A', locale['A']).replace('B', locale['B']).replace('C', locale['C'])

    function Line({red, blue, black}) {
        return <tr>
            <td><Red>{translate(red)}</Red></td>
            <td><Blue>{translate(blue)}</Blue></td>
            <td><Black>{translate(black)}</Black></td>
        </tr>
    }

    return <Cell>
        <CellBody>
            <CellTitle>Посл. проводов</CellTitle>
            <table className="center-elements">
                <tbody>
                    <Line red="C" blue="B" black="ABC"></Line>
                    <Line red="B" blue="AC" black="AC"></Line>
                    <Line red="A" blue="B" black="B"></Line>
                    <Line red="AC" blue="A" black="AC"></Line>
                    <Line red="B" blue="B" black="B"></Line>
                    <Line red="AC" blue="BC" black="BC"></Line>
                    <Line red="ABC" blue="C" black="AB"></Line>
                    <Line red="AB" blue="AC" black="C"></Line>
                    <Line red="C" blue="A" black="C"></Line>
                </tbody>
            </table>
        </CellBody>
        <CellImage src="assets/wire-sequences.png" size={150}></CellImage>
    </Cell>;
}