import './grokColumn.css'
import Button from './button.jsx'
import { useState } from 'react'

function GrokColumn() {
    const [prompt, setPrompt] = useState('')

    return (
        <div className="grokColumn">
            <div className="grokTopBar">
                <Button className="grokFullscreenButton" img="/" />
                <Button className="grokHistory" img="/" text='History' />

            </div>

            <div className="grokCenter">
                <div className="grokLogoRow">
                    <img className="grokLogoIcon" src="/" alt="" />
                    <span className="grokLogoText">Grok</span>
                </div>

                <div className="grokInputBar">
                    <Button className="grokAttachIcon" img="/" />
                    <input
                        className="grokInput"
                        placeholder="Ask anything"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    <Button className="grokEnterButton" img="/" />
                </div>

                <div className="grokActionRow">
                    <Button className="grokActionButton" img="/" text="Create Videos" />
                    <Button className="grokActionButton" img="/" text="Create Images" />
                    <Button className="grokActionButton" img="/" text="Edit Image" />
                    <Button className="grokActionButton" img="/" text="Latest News" />
                </div>
            </div>
        </div>
    )
}

export default GrokColumn