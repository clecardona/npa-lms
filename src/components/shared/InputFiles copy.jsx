//@ts-nocheck
import { useState } from "react";
import FileExists from "./FileExists";
import FileUpload from "./FileUpload";

export default function InputFiles({ onChange, options, state }) {
  const { key, label,  mode } = options;
  //Local states
  const [visible, setVisible] = useState(false);
  const [files, setFiles] = useState(state);

  //todo- limit filesize upload to 5mb
  //var filesize = ((files[x].size/1024)/1024).toFixed(4); // MB

  //methods

  
  function clearField(index) {
    let newFiles = { ...files };
    delete newFiles.[`l${index}`];
    setFiles(newFiles);
    onChange(key, newFiles);
  }

  // todo- refactor more
  return (
    <>
      <label className="files">
        File{(visible) || mode === "edit" ? "s" : ""}:
      </label>

      {mode === "edit" && state.l1 ? 
        <FileExists action={clearField} index={1} state={state.l1}/>
      : 
        <FileUpload hook={[files, setFiles]} onChange={onChange} item={key} index={1}/>
      }
      
      {(visible || mode === "edit") && (
        <>
          {state.l2 ? (
            <FileExists action={clearField} index={2} state={state.l2}/>
          ) : (           
            <FileUpload hook={[files, setFiles]} onChange={onChange} item={key}  index={2}/>          
          )}
         {state.l3 ? (
            <FileExists action={clearField} index={3} state={state.l3}/>
          ) : (       
            <FileUpload hook={[files, setFiles]} onChange={onChange} item={key}  index={3}/>
           )}
        </>
      )}
     
    
      { mode === "create" && (
        <button
          className="btn btn-ghost btn-add-field btn-180"
          onClick={() => {
            setVisible(!visible);
          }}
          type="button"
        >
          <h4> {visible ? "show less":"more files ( < 3 )"} </h4>
        </button>
      )}
    </>
  );
}
