import {v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { useState } from 'react';
/**
 * 
 * @param None
 * @state {boxData} Array of existing boxes [{height: 1, width: 2, color: "red"},...]
 * App -> BoxList -> Box and NewBoxForm
 */

function BoxList() {
    const [boxData, setBoxData] = useState([]);
    console.log("boxData state ", boxData);

    // adds new box to boxData state
    function addBox(box) {
        const newBox = {...box, id: uuid() };
        setBoxData(boxes => [...boxes, newBox]);
    }

    return (
        <div>
          <NewBoxForm addBox={addBox} />
          {(boxData.map(b => 
            <Box height={b.height} width={b.width} color={b.color}/> ))} 
        </div>
    )

}

export default BoxList;


// render the newboxform
// iterate through the box array and render each box