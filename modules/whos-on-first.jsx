// noinspection JSXNamespaceValidation

function WhosOnFirst() {
    const version = React.useContext(VersionContext);

    const look = {
        "v2-rus": {
            "ДА": "LC",
            "ПЕРВОЕ": "RU",
            "ЭКРАН": "RD",
            "ГОТОВО": "RU",
            "ДРУГОЙ": "RD",
            "НИЧЕГО": "LC",
            " ": "LD",
            "ПУСТО": "RC",
            "НЕТ": "RD",
            "ВЕСЕЛО": "LC",
            "ВЕСИЛА": "RD",
            "ВЕСИЛО": "RC",
            "КОРИТСЯ": "RC",
            "КОРИЦА": "LD",
            "КОРОТЬСЯ": "LD",
            "СТОЙ": "RD",
            "ГЛАЗ": "RC",
            "ГЛАС": "RD",
            "ПОРОГ": "RC",
            "ПОРОК": "RC",
            "ПАРОК": "LU",
            "КРАБ": "RD",
            "КРАП": "LD",
            "КРАББ": "LC",
            "ПАС": "LC",
            "ПАСС": "RD",
            "ПАЗ": "RU",
            "ПОГОДИ": "RD",
        },
        "v1-eng": {
            "YES": "LC",
            "FIRST": "RU",
            "DISPLAY": "RD",
            "OKAY": "RU",
            "SAYS": "RD",
            "NOTHING": "LC",
            " ": "LD",
            "BLANK": "RC",
            "NO": "RD",
            "LED": "LC",
            "LEAD": "RD",
            "READ": "RC",
            "RED": "RC",
            "REED": "LD",
            "LEED": "LD",
            "HOLD ON": "RD",
            "YOU": "RC",
            "YOU ARE": "RD",
            "YOUR": "RC",
            "YOU'RE": "RC",
            "UR": "LU",
            "THERE": "RD",
            "THEY'RE": "LD",
            "THEIR": "LC",
            "THEY ARE": "LC",
            "SEE": "RD",
            "C": "RU",
            "CEE": "RD",
        },
    }[version];

    const directions = {
        "L": "Лево",
        "R": "Право",
        "U": "Верх",
        "C": "Центр",
        "D": "Низ",
    };

    const press = {
        "v2-rus": {
            "ГОТОВО": "ДА, ПОСТОЙ, ЕЩЁ РАЗ, ВЕСИЛА, ВЕСИЛО, СТОЙ, ВЕСЕЛО, ПУСТО, ГОТОВО, НЕТ, ПЕРВОЕ, ЕЩЕ РАЗ, НИЧЕГО, ПОГОДИ",
            "ПЕРВОЕ": "ВЕСИЛО, ПОСТОЙ, ДА, ВЕСИЛА, НЕТ, ВЕСЕЛО, НИЧЕГО, ЕЩЕ РАЗ, ПОГОДИ, ГОТОВО, ПУСТО, ЕЩЁ РАЗ, СТОЙ, ПЕРВОЕ",
            "НЕТ": "ПУСТО, ЕЩЕ РАЗ, ПОГОДИ, ПЕРВОЕ, ЕЩЁ РАЗ, ГОТОВО, ВЕСЕЛО, ДА, НИЧЕГО, ВЕСИЛО, СТОЙ, ПОСТОЙ, НЕТ, ВЕСИЛА",
            "ПУСТО": "ПОГОДИ, ВЕСЕЛО, ПОСТОЙ, ВЕСИЛА, ПУСТО, СТОЙ, ГОТОВО, НИЧЕГО, НЕТ, ЕЩЁ РАЗ, ВЕСИЛО, ЕЩЕ РАЗ, ДА, ПЕРВОЕ",
            "НИЧЕГО": "ЕЩЕ РАЗ, ВЕСЕЛО, ПОСТОЙ, ВЕСИЛА, ДА, ПУСТО, НЕТ, СТОЙ, ВЕСИЛО, ЕЩЁ РАЗ, ПОГОДИ, ПЕРВОЕ, НИЧЕГО, ГОТОВО",
            "ДА": "ПОСТОЙ, ВЕСЕЛО, ЕЩЕ РАЗ, ВЕСИЛА, ПЕРВОЕ, ЕЩЁ РАЗ, СТОЙ, ГОТОВО, НИЧЕГО, ДА, ВЕСИЛО, ПУСТО, НЕТ, ПОГОДИ",
            "ЕЩЁ РАЗ": "ЕЩЕ РАЗ, ЕЩЁ РАЗ, ВЕСИЛО, НИЧЕГО, ГОТОВО, ПУСТО, ВЕСИЛА, НЕТ, ПОСТОЙ, ПЕРВОЕ, ПОГОДИ, ДА, СТОЙ, ВЕСЕЛО",
            "ЕЩЕ РАЗ": "ГОТОВО, НИЧЕГО, ВЕСИЛО, ЕЩЁ РАЗ, ПОСТОЙ, ДА, ВЕСЕЛО, НЕТ, СТОЙ, ПУСТО, ЕЩЕ РАЗ, ВЕСИЛА, ПОГОДИ, ПЕРВОЕ",
            "ВЕСИЛО": "ВЕСЕЛО, ВЕСИЛО, ПЕРВОЕ, НЕТ, ВЕСИЛА, ДА, ПУСТО, ЕЩЁ РАЗ, ЕЩЕ РАЗ, ПОГОДИ, СТОЙ, ГОТОВО, ПОСТОЙ, НИЧЕГО",
            "ВЕСЕЛО": "ДА, НИЧЕГО, ГОТОВО, СТОЙ, НЕТ, ПОГОДИ, ЕЩЁ РАЗ, ВЕСЕЛО, ВЕСИЛА, ВЕСИЛО, ЕЩЕ РАЗ, ПУСТО, ПОСТОЙ, ПЕРВОЕ",
            "ВЕСИЛА": "ПУСТО, ГОТОВО, ПОСТОЙ, ЕЩЁ РАЗ, НИЧЕГО, СТОЙ, НЕТ, ПОГОДИ, ВЕСИЛО, ВЕСИЛА, ВЕСЕЛО, ПЕРВОЕ, ЕЩЕ РАЗ, ДА",
            "ПОСТОЙ": "ВЕСИЛА, НЕТ, ПЕРВОЕ, ДА, ЕЩЕ РАЗ, НИЧЕГО, ПОГОДИ, ПОСТОЙ, ВЕСИЛО, ГОТОВО, ПУСТО, СТОЙ, ЕЩЁ РАЗ, ВЕСЕЛО",
            "ПОГОДИ": "ЕЩЕ РАЗ, НЕТ, ПУСТО, ПОСТОЙ, ДА, ВЕСИЛО, ПЕРВОЕ, СТОЙ, ЕЩЁ РАЗ, ПОГОДИ, НИЧЕГО, ГОТОВО, ВЕСЕЛО, ВЕСИЛА",
            "СТОЙ": "ВЕСЕЛО, ВЕСИЛА, ДА, ГОТОВО, СТОЙ, ПОСТОЙ, НИЧЕГО, ЕЩЕ РАЗ, ПУСТО, ВЕСИЛО, ПЕРВОЕ, ЕЩЁ РАЗ, НЕТ, ПОГОДИ",
            "ВО ВСЕ": "ЧЕ?, ВОВСЕ, ВСЕ, ВСЁ, ДАЛЬШЕ, ПАС, И ТАК, ЧЁ?, ПАЗ, ВО ВСЕ, ПАСС, ЧТО?, ЖМИ, ИТАК",
            "ВОВСЕ": "ВСЕ, ДАЛЬШЕ, ЧТО?, ПАС, ПАЗ, ЖМИ, ПАСС, ЧЁ?, ВО ВСЕ, ИТАК, ВСЁ, ЧЕ?, И ТАК, ВОВСЕ",
            "ВСЕ": "ПАСС, ВОВСЕ, ПАС, ВСЕ, ДАЛЬШЕ, И ТАК, ЧЕ?, ИТАК, ВСЁ, ВО ВСЕ, ПАЗ, ЧЁ?, ЧТО?, ЖМИ",
            "ВСЁ": "ВО ВСЕ, ВСЁ, И ТАК, ДАЛЬШЕ, ПАСС, ВОВСЕ, ИТАК, ВСЕ, ПАЗ, ПАС, ЧЕ?, ЖМИ, ЧТО?, ЧЁ?",
            "И ТАК": "ЖМИ, ИТАК, И ТАК, ПАС, ПАЗ, ЧЕ?, ВСЕ, ЧЁ?, ВСЁ, ЧТО?, ДАЛЬШЕ, ПАСС, ВОВСЕ, ВО ВСЕ",
            "ИТАК": "ПАС, ЧЕ?, ДАЛЬШЕ, ПАЗ, ВСЁ, И ТАК, ПАСС, ЖМИ, ИТАК, ВО ВСЕ, ЧТО?, ЧЁ?, ВОВСЕ, ВСЕ",
            "ПАС": "ПАС, ВСЕ, ВОВСЕ, ВО ВСЕ, ЖМИ, ЧЁ?, ПАСС, ДАЛЬШЕ, ЧЕ?, ЧТО?, ВСЁ, И ТАК, ИТАК, ПАЗ",
            "ПАСС": "И ТАК, ИТАК, ВОВСЕ, ВСЁ, ДАЛЬШЕ, ПАСС, ЖМИ, ВО ВСЕ, ПАС, ЧТО?, ВСЕ, ЧЕ?, ЧЁ?, ПАЗ",
            "ПАЗ": "ВО ВСЕ, ЧЁ?, ВСЁ, ВСЕ, ИТАК, ЖМИ, ПАСС, ЧТО?, ВОВСЕ, ПАС, И ТАК, ДАЛЬШЕ, ПАЗ, ЧЕ?",
            "ЖМИ": "ЧЕ?, ПАС, ДАЛЬШЕ, ПАЗ, ВСЕ, И ТАК, ВСЁ, ЧЁ?, ЧТО?, ВО ВСЕ, ИТАК, ВОВСЕ, ПАСС, ЖМИ",
            "ДАЛЬШЕ": "ПАЗ, ПАС, ПАСС, ВСЕ, ЧЁ?, ЧЕ?, ДАЛЬШЕ, ЧТО?, ЖМИ, ВОВСЕ, И ТАК, ВСЁ, ИТАК, ВО ВСЕ",
            "ЧЁ?": "ВОВСЕ, ИТАК, ЖМИ, ПАСС, ВО ВСЕ, И ТАК, ЧЕ?, ПАЗ, ВСЁ, ДАЛЬШЕ, ЧЁ?, ПАС, ВСЕ, ЧТО?",
            "ЧЕ?": "ВОВСЕ, ЖМИ, ЧТО?, ВСЁ, ВО ВСЕ, ЧЁ?, ПАС, И ТАК, ЧЕ?, ИТАК, ПАЗ, ДАЛЬШЕ, ВСЕ, ПАСС",
            "ЧТО?": "ВСЁ, ДАЛЬШЕ, ИТАК, И ТАК, ЧЁ?, ЖМИ, ПАСС, ПАЗ, ПАС, ВО ВСЕ, ЧТО?, ЧЕ?, ВОВСЕ, ВСЕ",
        },
        "v1-eng": {
            "READY": "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT",
            "FIRST": "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST",
            "NO": "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE",
            "BLANK": "WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST",
            "NOTHING": "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY",
            "YES": "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT",
            "WHAT": "UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT",
            "UHHH": "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST",
            "LEFT": "RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING",
            "RIGHT": "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST",
            "MIDDLE": "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES",
            "OKAY": "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT",
            "WAIT": "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE",
            "PRESS": "RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT",
            "YOU": "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U",
            "YOU ARE": "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE",
            "YOUR": "UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE",
            "YOU'RE": "YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD",
            "UR": "DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU",
            "U": "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR",
            "UH HUH": "UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?",
            "UH UH": "UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?",
            "WHAT?": "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE",
            "DONE": "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE",
            "NEXT": "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU",
            "HOLD": "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE",
            "SURE": "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH",
            "LIKE": "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR",
        },
    }[version];

    return <Cell>
        <CellBody>
            <CellTitle>Авас - а вас</CellTitle>
            <Sections>
                <Section>
                    <table className="text-xs">
                        {
                            Object.keys(look).sort((l, r) => l.localeCompare(r)).map(word =>
                                <tr key={word}>
                                    <td className="text-center px-1">{
                                        ((word !== " ") ? word : (<span className="text-slate-300">*ничего*</span>))
                                    }</td>
                                    <td className="p-0.5 font-bold">
                                        {`${directions[look[word][0]]} ${directions[look[word][1]]}`}
                                    </td>
                                </tr>)
                        }
                    </table>
                </Section>
                <Section>
                    <table className="text-xs">
                        {
                            Object.keys(press).sort((l, r) => l.localeCompare(r)).map(word => {
                                const all = press[word].split(", ");
                                const end = all.findIndex(x => x === word);
                                return <tr key={word}>
                                    <td className="text-center px-1">{word}</td>
                                    <td className="p-0.5 font-bold">{
                                        all.slice(0, end + 1).join(", ")
                                    }</td>
                                </tr>;
                            })
                        }
                    </table>
                </Section>
            </Sections>
        </CellBody>
        <CellImage src="assets/whos-on-first.png" size={150}></CellImage>
    </Cell>;
}