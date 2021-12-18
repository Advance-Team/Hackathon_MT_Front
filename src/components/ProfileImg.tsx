import './ProfileImg.css';

interface ContainerProps {
  imgSrc: string;
}

const ProfileImg: React.FC<ContainerProps> = ({ imgSrc }) => {
  return (
    <div className="profileImgContainer">
      <img src={imgSrc} />
    </div>
  );
};

export default ProfileImg;
