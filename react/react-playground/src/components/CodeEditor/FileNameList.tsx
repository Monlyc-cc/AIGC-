import { useContext} from 'react'
import { PlayGroudContext } from '../../ReactPlayGround/PlayGroudContext'
import FileNameItem from './FileNameItem'
import styles from './index.module.scss'
import { type FileItem , type Files } from '../../Files/types.ts'


export default function FileNameList() {

  const {
    files,
    selectedFilename,
    setSelectedFilename,
    addFile,
    removeFile,
    updateFileName
  } = useContext(PlayGroudContext)

  const handleonClick = (value: string) => {
    setSelectedFilename(value)
  }

  return (
    <div className={styles.tabs}>{
      Object.keys(files).map((item) => {
        return (
          <FileNameItem
            key={item}
            value={item}
            selected={item == selectedFilename}
            onClick={handleonClick}
          ></FileNameItem>
        )
      })
    }</div>
  )
}
