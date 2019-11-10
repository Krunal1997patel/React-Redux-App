import React from 'react'


export const Overwatch = props => {

    const char = props.data

    console.log(char);

    return(
        <div className='card'>
            <h2>{char.name}</h2>
            <h3>Real Name: {char.real_name}</h3>
            <h3>Age: {char.age}</h3>
            <h3>Height: {char.height}</h3>
            <h3>Operations: {char.base_of_operations}</h3>
            <div>
                <h4>
                    <p>Armour</p>
                    <span>
                        {char.armour}
                    </span>
                </h4>
                <h4>
                    <p>Health</p>
                    <span>
                        {char.health}
                    </span>
                </h4>
                <h4>
                    <p>Shield</p>
                    <span>
                        {char.shield}
                    </span>
                </h4>
            </div>
            {/* <p>{char.description}</p> */}
        </div>
    )
}