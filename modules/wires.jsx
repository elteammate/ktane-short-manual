// noinspection JSXNamespaceValidation


function Wires() {
    return <Cell>
        <CellBody>
            <CellTitle>Провода</CellTitle>
            <Sections>
                <Section>
                    <SectionTitle>3 провода</SectionTitle>
                    <table>
                        <tr>
                            <td><Red>Красных нет</Red></td>
                            <td>2nd</td>
                        </tr>
                        <tr>
                            <td><White>Белый last</White></td>
                            <td><White>3rd</White></td>
                        </tr>
                        <tr>
                            <td><Blue>Синих > 1</Blue></td>
                            <td><Blue>last синий</Blue></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>3rd</td>
                        </tr>
                    </table>
                </Section>
                <Section>
                    <SectionTitle>4 провода</SectionTitle>
                    <table>
                        <tr>
                            <td><Red>Красных > 1</Red></td>
                            <td><SN/> нечет</td>
                            <td><Red>last красный</Red></td>
                        </tr>
                        <tr>
                            <td><Yellow>Желтый last</Yellow></td>
                            <td><Red>Красных нет</Red></td>
                            <td><White>1st</White></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Blue>Синий = 1</Blue></td>
                            <td>1st</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Yellow>Желтый > 1</Yellow></td>
                            <td>4th</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>2nd</td>
                        </tr>
                    </table>
                </Section>
                <Section>
                    <SectionTitle>5 проводов</SectionTitle>
                    <table>
                        <tr>
                            <td><Black>Черный last</Black></td>
                            <td><SN/> нечет</td>
                            <td>4th</td>
                        </tr>
                        <tr>
                            <td><Red>Красных = 1</Red></td>
                            <td><Yellow>Желтых > 1</Yellow></td>
                            <td>1st</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Black>Черных нет</Black></td>
                            <td>2nd</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>1st</td>
                        </tr>
                    </table>
                </Section>
                <Section>
                    <SectionTitle>6 проводов</SectionTitle>
                    <table>
                        <tr>
                            <td><Yellow>Желтых нет</Yellow></td>
                            <td><SN/> нечет</td>
                            <td>3rd</td>
                        </tr>
                        <tr>
                            <td><Yellow>Желтый = 1</Yellow></td>
                            <td><White>Белых > 1</White></td>
                            <td>4th</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Red>Красных нет</Red></td>
                            <td>6th</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>4th</td>
                        </tr>
                    </table>
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/simple-wires.png" size={150}></CellImage>
    </Cell>;
}