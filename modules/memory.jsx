// noinspection JSXNamespaceValidation


function Memory() {
    return <Cell>
        <CellBody>
            <CellTitle>Память</CellTitle>
            <table className="center-elements">
                <tr>
                    <td>Этап</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>позиция 2</td>
                    <td>значение 4</td>
                    <td>значение этапа 2</td>
                    <td>позиция этапа 1</td>
                    <td>значение этапа 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>позиция 2</td>
                    <td>позиция этапа 1</td>
                    <td>значение этапа 1</td>
                    <td>позиция 1</td>
                    <td>значение этапа 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>позиция 3</td>
                    <td>позиция 1</td>
                    <td>позиция 3</td>
                    <td>позиция этапа 2</td>
                    <td>значение этапа 4</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>позиция 4</td>
                    <td>позиция этапа 1</td>
                    <td>значение 4</td>
                    <td>позиция этапа 2</td>
                    <td>значение этапа 3</td>
                </tr>
            </table>
        </CellBody>
        <CellImage src="assets/memory.png" size={150}></CellImage>
    </Cell>;
}