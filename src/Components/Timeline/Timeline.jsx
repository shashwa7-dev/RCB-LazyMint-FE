import './Timeline.css'
import line from '../../static/Line.svg'
import {useState, useEffect} from 'react'
import { useModalStore } from '../../App'





  

export const Timeline = ({stage_id,stage_complete_status}) => {
    
    const { setA,setB,setC } = useModalStore();
    const [block1Active, setBlock1Active] = useState(false)
    const [block2Active,setBlock2Active] = useState(false)
    const [block3Active,setBlock3Active] = useState(false)
    
    console.log({setA,setB,setC})
    //listening changes for the prop : stage_id
    useEffect(() => {
    //current timeline logic
    if(stage_id === 1){
        setBlock1Active(true)
        setBlock2Active(false)
        setBlock3Active(false)
    }
    else if(stage_id === 2){
        setBlock1Active(true)
        setBlock2Active(true)
        setBlock3Active(false)
    }else if(stage_id === 3){
        setBlock1Active(true)
        setBlock2Active(true)
        setBlock3Active(true)
    }
    },[stage_id])


    return (
        <div className='timeline_container'>
          <div className="block block_1" style={{ background: block1Active ? "var(--color-gradient-2)" : 'transparent' }}>
          {(setA ) ? <span><i class="fas fa-check"></i></span> : <span>1</span>}
          </div>  
          <div className="line_1">
              <img src={line} alt="line" className="line_svg" />
          </div>
          <div className="block block_2" style={{ background: block2Active ? "var(--color-gradient-2)" : 'transparent' }}>
          {(setB ) ? <span><i class="fas fa-check"></i></span> : <span>2</span>}
          </div>
          <div className="line_2">
             <img src={line} alt="line" className="line_svg" />
          </div>
          <div className="block block_3" style={{ background: block3Active ? "var(--color-gradient-2)" : 'transparent' }}>
          {(setC ) ? <span> <i class="fas fa-check"></i> </span>: <span>3</span>}   
          </div>
            
        </div>
    )
}
