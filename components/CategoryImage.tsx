import styles from "../styles/categoryimage.module.css";

interface Props {
  title: string;
  image: string
  func: () => any
  name: () => any
  //onClick: any 
}

function CategoryImage({ image, title, func, name }: Props) {

  function combinedFunctions(){
    func()
    name()
  }

  return (
    <div className={`min-w-[10rem] w-[10rem] h-[10rem] md:mx-5 flex flex-col items-center justify-between cursor-pointer xs:mx-2 ${styles.categoryImage}`} onClick = {combinedFunctions}>
      <img src={image} className={`w-[8rem] h-[8rem] `} alt="" />
      <h2 className = {`text-xl color-black font-bold`}>{title}</h2>
    </div>
  );
}

export default CategoryImage;
