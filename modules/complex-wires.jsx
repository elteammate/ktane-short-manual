// noinspection JSXNamespaceValidation

function WireTable({c, cI, cS, cSI, bg}) {
    return (<table className="center-elements">
        <tbody style={{
            background: bg
        }}>
        <tr>
            <td></td>
            <td></td>
            <td>★</td>
        </tr>
        <tr>
            <td></td>
            <td>{c}</td>
            <td>{cS}</td>
        </tr>
        <tr>
            <td>•</td>
            <td>{cI}</td>
            <td>{cSI}</td>
        </tr>
        </tbody>
    </table>);
}

function ComplexWires() {

    const Cut = <Green>✓</Green>;
    const DontCut = <Red>✖</Red>;
    const SN = <Blue>SN</Blue>;
    const Batteries = <Orange>B</Orange>;
    const PP = <Yellow>PP</Yellow>;

    const red = "rgba(255,88,195,0.3)"
    const blue = "rgba(147,227,255,0.3)"
    const rb = `repeating-linear-gradient(45deg, ${red} 0px, ${red} 10px, ${blue} 10px, ${blue} 20px, ${red} 20px)`

    return <Cell>
        <CellBody>
            <CellTitle>Сложные провода</CellTitle>
            <Sections>
                <Section>
                    <WireTable c={Cut} cS={Cut} cI={DontCut} cSI={Batteries} bg="white"></WireTable>
                </Section>
                <Section>
                    <WireTable c={SN} cS={Cut} cI={Batteries} cSI={Batteries} bg={red}></WireTable>
                </Section>
                <Section>
                    <WireTable c={SN} cS={PP} cI={DontCut} cSI={PP} bg={blue}></WireTable>
                </Section>
                <Section>
                    <WireTable c={SN} cS={PP} cI={SN} cSI={DontCut} bg={rb}></WireTable>
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/complex-wires.png" size={150}></CellImage>
    </Cell>;
}