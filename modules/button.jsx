// noinspection JSXNamespaceValidation

function Button() {
    const version = React.useContext(VersionContext);

    const locale = {
        "v2-rus": {
            abort: "прервать",
            detonate: "взорвать",
            hold: "держать",
        },
        "v1-eng": {
            abort: "abort",
            detonate: "detonate",
            hold: "hold",
        }
    }[version]

    return <Cell>
        <CellBody>
            <CellTitle>Кнопка</CellTitle>
            <Sections>
                <Section>
                    <Table>
                        <tr>
                            <td></td>
                            <td><Blue>Синее "{locale.abort}"</Blue></td>
                            <td>Удержать</td>
                        </tr>
                        <tr>
                            <td><Batteries/> > 1</td>
                            <td><Blue>"{locale.detonate}"</Blue></td>
                            <td>Нажать</td>
                        </tr>
                        <tr>
                            <td><Indicator>CAR</Indicator></td>
                            <td><White>Белая</White></td>
                            <td>Удержать</td>
                        </tr>
                        <tr>
                            <td><Batteries/> > 2</td>
                            <td><Indicator>FRK</Indicator></td>
                            <td>Нажать</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Yellow>Желтая</Yellow></td>
                            <td>Удержать</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Red>Красная "{locale.hold}"</Red></td>
                            <td>Нажать</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Удержать</td>
                        </tr>
                    </Table>
                    <div className="p-2"></div>
                    <Table>
                        <tr>
                            <td><Blue>Синяя полоска</Blue></td>
                            <td>отпустить когда 4</td>
                        </tr>
                        <tr>
                            <td><Yellow>Желтая полоска</Yellow></td>
                            <td>отпустить когда 5</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>отпустить когда 1</td>
                        </tr>
                    </Table>
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/button.png" size={150}></CellImage>
    </Cell>;
}