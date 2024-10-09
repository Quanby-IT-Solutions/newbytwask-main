"use client";


interface TaskCategory {
    title: string;
    link: string;
  }
  
  const CategoryList: React.FC<TaskCategory> = ({ title, link }) => {
    return (
        <a href={link}>
            <p className="self-start text-xl text-gray-600/75 hover:text-gray-700 hover:scale-110">{title}</p>
        </a>
        
    );
  };
  
  const categories: TaskCategory[] = [
    { title: "Graphics & Design", link: "/graphicsAnddesign"},
    { title: "Digital Marketing", link: "/digitalmarket"},
    { title: "Writing & Translation", link: "/writingAndtranslation"},
    { title: "Video & Animation", link: "/videoAndanimation"},
    { title: "Music & Video", link: "/musicAndvideo"},
    { title: "Programming & Tech", link: "/programmingAndtech"},
    { title: "Photography", link: "/photography"},
    { title: "Business", link: "/business"},
    { title: "Ai Services", link: "/aiservices"},
  ];
  

  const _Navbar: React.FC = () => {

  return (
    <header className="bg-white text-black px-4 py-2 ">
      {/* Navigation container */}
      <nav className="flex items-center px-4 lg:px-8">
        <div className="flex justify-between w-full gap-5">
          {categories.map((category, index) => (
            <CategoryList key={index} {...category} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default _Navbar;
