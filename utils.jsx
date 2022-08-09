// noinspection JSXNamespaceValidation

function Row({children}) {
    return (<div className="w-full p-2 flex">
        {children}
    </div>);
}

function Cell({children}) {
    return (<div className="p-1 m-1 bg-amber-100 grow flex">
        {children}
    </div>);
}

function CellTitle({children}) {
    return (<h2 className="w-full text-sm text-center italic">{children}</h2>);
}

function CellBody({children}) {
    return (<div className="grow flex-col">
        {children}
    </div>);
}

function Sections({children}) {
    return (<div className="w-full flex p-1">
        {children}
    </div>);
}

function Section({children}) {
    return (<div className="grow p-1 m-1 flex flex-col">
        {children}
    </div>);
}

function SectionTitle({children}) {
    return (<h3 className="w-full text-sm text-center italic">{children}</h3>);
}

function CellImage({src, size = 300}) {
    return (<img src={src} alt="?" style={{height: size}}></img>);
}

function Red({children}) {
    return (<span className="bg-red-300">{children}</span>);
}

function White({children}) {
    return (<span className="bg-white">{children}</span>);
}

function Blue({children}) {
    return (<span className="bg-blue-300">{children}</span>);
}

function Yellow({children}) {
    return (<span className="bg-yellow-300">{children}</span>);
}

function Green({children}) {
    return (<span className="bg-green-300">{children}</span>);
}

function Orange({children}) {
    return (<span className="bg-orange-300">{children}</span>);
}

function Black({children}) {
    return (<span className="bg-gray-400">{children}</span>);
}

function SN() {
    return <span className="bg-blue-300 rounded-md px-1">SN</span>;
}

function Batteries() {
    return <span className="bg-amber-500 rounded-md px-1">Батарейки</span>;
}

function Indicator({children}) {
    return <span className="bg-cyan-500 rounded-md px-1"><span>&bull;</span>{children}</span>;
}

function Table({children, chunkSize = 1000}) {
    const parts = [];
    for (let i = 0; i < children.length; i += chunkSize) {
        parts.push(children.slice(i, i + chunkSize));
    }

    return (<div className="flex">
        {parts.map((part, i) =>
            <table key={i} className="mx-1">
                <tbody>
                    {part}
                </tbody>
            </table>)}
    </div>);
}

const VersionContext = React.createContext();
