export default function FileUpload({ hook, onChange, item, index, action }) {
  const [files, setFiles] = hook;
  return (
    <label className="files">
      <input
        type="file"
        onChange={(e) => {
          setFiles({ ...files, [`l${index}`]: e.target.files[0] });
          onChange(item, { ...files, [`l${index}`]: e.target.files[0] });
        }}
      />
    </label>
  );
}
