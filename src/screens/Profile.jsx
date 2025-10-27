import { Text, Platform, TouchableOpacity, View, Image } from 'react-native'
import { useMMKVBoolean } from 'react-native-mmkv';
import StyledView from '../components/StyledView';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useEffect, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import DarkModeToggle from '../components/DarkModeToggle';
 


const Profile = () => {
  const [filePath, setFilePath] = useState(null);
  const os = Platform.OS;
  const [isAuthenticated, setIsAuthenticated] = useMMKVBoolean('isAuthenticated');

  const handleProfilePictureSelect = () => {
    const permission = os === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

    request(permission).then((result) => {
      console.log('Permission result:', result);
      if (result === 'granted') {
        launchImageLibrary(
          {
            mediaType: 'photo',
          },
          response => {
            if (!response.didCancel && !response.error) {
              console.log(response.assets[0].uri)
              setFilePath(response.assets[0].uri);
            }
          },
        )
      } else {
        console.log('Permission denied');
      }
    }
    ).catch((error) => {
      console.error('Permission request error:', error);
    });
  };

  return (
    <StyledView>
      <View className='flex-1 justify-center items-center'>
        <DarkModeToggle />
         <TouchableOpacity onPress={handleProfilePictureSelect} className='size-[100px] border-[1px] border-zinc-300 rounded-full justify-center items-center overflow-hidden'>
          <Image
            source={{ uri: filePath || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg" }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsAuthenticated(false);
          }}
          className='bg-blue-600 w-[350px] px-5 py-3 mt-5 rounded-md'>
          <Text className='text-white text-xl font-medium text-center'>Log out</Text>
        </TouchableOpacity>
      </View>
    </StyledView>
  );
};

export default Profile;
