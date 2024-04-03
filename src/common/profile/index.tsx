import Image from "next/image";

import S from "./Profile.module.scss";

interface ProfileProps {
  profile: {
    imageSource: string;
    email: string;
  };
}

const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className={S.container}>
      <Image
        className={S.image}
        src={profile.imageSource}
        alt="프로필 이미지"
      />
      <span className={S.email}>{profile.email}</span>
    </div>
  );
};

export default Profile;
