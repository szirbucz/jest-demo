import React, { useState } from "react";

export function SuicideButton() {
    let [visible, setVisible] = useState(true);

    return (
        <div>
        { visible && <button onClick={() => setVisible(false)} data-testid="suicide-button">
            Kill me
        </button>}
        </div>
    );
}