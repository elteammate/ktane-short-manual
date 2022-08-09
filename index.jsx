// noinspection JSXNamespaceValidation

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App></App>);

function App() {
    const [version, setVersion] = React.useState("v2-rus");

    return (<VersionContext.Provider value={version}>
        <div className="w-full">
            <div className="flex w-full">
                <h1 className="text-xl text-center grow">Keep Talking And Nobody Explodes, {version}, краткое руководство</h1>
                <select onChange={e => setVersion(e.target.value)} value={version}>
                    <option value="v2-rus">v2-rus (317)</option>
                    <option value="v1-eng">v1-eng (241)</option>
                </select>
            </div>
            <Row>
                <Cell>
                    <CellBody>
                        <CellTitle>Обратить внимание:</CellTitle>
                        <div>Последняя цифра <SN/> - чет/нечет</div>
                        <div>Гласные в <SN/> - есть/нет</div>
                        <div><Batteries/> - кол-во</div>
                        <div>Горит <Indicator>FRK</Indicator>, <Indicator>CAR</Indicator></div>
                    </CellBody>
                </Cell>
                <Button></Button>
                <Symbols></Symbols>
                <SimonSays></SimonSays>
                <WireSequences></WireSequences>
            </Row>
            <Row>
                <Wires></Wires>
            </Row>
            <Row>
                <Memory></Memory>
                <Morse></Morse>
            </Row>
            <Row>
                <ComplexWires></ComplexWires>
                <Password></Password>
                <Knobs></Knobs>
            </Row>
            <Row>
                <Maze></Maze>
                <WhosOnFirst></WhosOnFirst>
            </Row>
        </div>
    </VersionContext.Provider>);
}
