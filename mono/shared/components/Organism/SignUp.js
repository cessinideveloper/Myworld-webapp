import React from 'react';
import Text from 'shared/components/atoms/Text';
import Button from 'shared/components/atoms/Button';
import ImageButton from 'shared/components/molecules/ImageButton';
const SignUp = ({ img, txt }) => {
  return (
    <div className="w-1/4 border px-2 py-5 flex flex-col gap-2 rounded-xl">
      <Text style="signup heading" label="New to Myworld?" />
      <Text
        style="signup text"
        label="Signup now to get your own personalized Hub!"
      />
      <ImageButton text={'Sign Up with Google'} img={img} />
      <ImageButton text={'Sign Up with Phone or Email'} />
      <Text
        style="signup text"
        label="By signing up you agree to the Terms of Service and Privacy Policy including Cookies Use"
      />
    </div>
  );
};

export default SignUp;
