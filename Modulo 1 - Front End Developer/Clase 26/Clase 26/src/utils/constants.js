import { LiaJsSquare } from "react-icons/lia"
import { FaCss3Alt, FaHtml5, FaFolder  } from "react-icons/fa";
import { BsFiletypeJsx } from "react-icons/bs";
import { SiGitignoredotio } from "react-icons/si";

//mapas de componentes 
const FILE_ICONS_NAME = {
  'JS': 'JS',
  'CSS': 'CSS',
  'JSX': 'JSX',
  'HTML':'HTML',
  'FOLDER':'FOLDER',
  'GITIGNORE':'GITIGNORE'
}

const FILE_ICONS = {
  [FILE_ICONS_NAME.JS]: LiaJsSquare,
  [FILE_ICONS_NAME.CSS]: FaCss3Alt,
  [FILE_ICONS_NAME.JSX]: BsFiletypeJsx,
  [FILE_ICONS_NAME.HTML]: FaHtml5,
  [FILE_ICONS_NAME.Folder]: FaFolder,
  [FILE_ICONS_NAME.Gitignore]: SiGitignoredotio
}


export {FILE_ICONS, FILE_ICONS_NAME}