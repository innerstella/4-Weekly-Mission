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
      <div className={S.image}>
        <Image
          className={S.profile}
          src={profile.imageSource}
          alt="프로필 이미지"
          fill
          objectFit="cover"
        />
      </div>
      <span className={S.email}>{profile.email}</span>
    </div>
  );
};

export default Profile;
