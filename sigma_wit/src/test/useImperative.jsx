import React, { useState, useRef, useImperativeHandle, useMemo,useEffect } from "react";


/* 
!What is useImperative handle?
    *This hook take three arguments. 'ref' from "Forward ref",callback function which returns object of data types which can be retrieved in the parent component for its use and dependency array. useImperativeHandle(ref,()=>({...}),[]) which is same as hook(ref,()=>{ return{...}},[])
      
    !From Docs `useImperativeHandle` customizes the instance value that is exposed to parent components when using ref`. As always, imperative code using refs should be avoided in most cases.

    *this thing can be achieved my prop drilling like passing the setter isVal function. Using setter func in child comp we can access the val in parent. val contains functions from child component and we can use it in parent. 
   
    *It allows us to exposes what properties we need to flash to parent

 
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const refContainer = useRef();
  if(refContainer.current !== undefined){
      console.log(refContainer)
  }
  return (
    <>
     <Counter ref={refContainer} />
      <button onClick={() => refContainer.current.increment()}>increment</button>
    </>
  );
};

const Counter = React.forwardRef((props, ref) => {
  const [val, isVal] = useState(0);
  useImperativeHandle(ref,()=>({
        increment:increment
  }))
  const increment = () => void isVal(() => val + 1);
  return (
    <>
        <button ref={ref} onClick={() => increment()}>
            increment
        </button>
        {React.memo(
            () => (
            <div>{val}</div>
            ),
            [val]
        )}
    </>
  );
});


export const EncapsulationEx = () => {
  const refFromParent = useRef()
  console.log(refFromParent.current)
  useEffect(()=>console.log(refFromParent.current))
  return <>
    <NestedInp ref={refFromParent}/>
    <button onClick={()=>{
      return refFromParent.current.focusAndBlur !== undefined ? refFromParent.current.focusAndBlur() : null
    }}>
      Focus and blur
    </button>
  </>
}

const NestedInp = React.forwardRef((props,RP) => {
  /*
  *Button in the EnCapsulationEx can access the ref that is used in the useImperative handle which implies the object that is used as second argument in hook. since the //?RefOfInput contains all the info about the Input, but we only getting certain info abt child and passing to  because of this hook that way we are encapsulated input from exposure.
  */
  
  const RefOfInput = useRef()
  console.log("Re-renders")
  useImperativeHandle(RP,(()=>({
    focusAndBlur : () => {
      RefOfInput.current.focus()
      setTimeout(()=>{
        RefOfInput.current.blur()
      },3000)
    }
  })))
  return <>
    <input type="text" ref={RefOfInput}/>
  </>
})