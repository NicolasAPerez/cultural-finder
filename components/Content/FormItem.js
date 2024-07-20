import React from 'react';

function FormItem({type = "text", name, required}) {
    return (
        <div style={{display:"table-row"}}>
            <label htmlFor={name} style={{textTransform:"capitalize", display:"table-cell"}}>
                {name.replace('_',' ') + ':'}
            </label>
            {type !== "textarea" && <input type={type} name={name} id={name} style={{display:"table-row"}} required={required}/>}
            {type === "textarea" && <textarea name={name} id={name} style={{display:"table-row"}} required={required}/>}
        </div>
    );
}

export default FormItem;