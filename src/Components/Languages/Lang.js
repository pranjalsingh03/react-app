import React from 'react'
import './Lang.css';


export default function Lang() {
  function Technical(){
    return(
      <>
      <div className="container">
      <h1 className="text-center">Technical Skills</h1>
      </div>
      </>
    )
  }

  return (
    <>
    <div className="container">
      <h1 className="text-center">Skills</h1>
  <div className="row">
    <div className="col-sm text-center border-solid" onClick={Technical}>
      Technical Skills
    </div>
    <div className="col-sm text-center border-solid">
      Soft Skills
    </div>
  </div>
  <section>
    he;;p
  </section>
</div>
    </>
  )
}
