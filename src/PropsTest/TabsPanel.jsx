import React from 'react'

function TabsPanel() {
    return (
        <>
            <article className="tabs w-fit mx-auto">
                <div className="tabs__container flex relative gap-10">
                    <button className="tabs__tab p-[8px] text-lg border-none bg-none cursor-pointer text-slate-500">Accueil</button>
                    <button className="tabs__tab p-[8px] text-lg border-none bg-none cursor-pointer text-slate-500">Vidéos</button>
                    <button className="tabs__tab p-[8px] text-lg border-none bg-none cursor-pointer text-slate-500">Shorts</button>
                    <button className="tabs__tab p-[8px] text-lg border-none bg-none cursor-pointer text-slate-500">Playlistswwwwwwww</button>
                </div>
                <div className="tabs__smart-bar"></div>
            </article>
        </>
    )
}

export default TabsPanel