import './ChangeAvatar.css'
import React, { useState, useRef} from 'react'
import ProfilePicture from './ProfilePicture'
import Button from 'react-bootstrap/Button'
import Cropper from 'react-easy-crop'
import Slider from 'react-bootstrap-slider'

const ChangeAvatar = (props) => {
  const inputRef = useRef()
  const triggerFileSelectPopup = () => inputRef.current.click()

  const [image, setImage] = useState(null)
  const [croppedArea, setCroppedArea] = useState(null)
	const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1);
  
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
  }
  
  const onSelectFile = (event) => {
		if (event.target.files && event.target.files.length > 0) {
			const reader = new FileReader();
			reader.readAsDataURL(event.target.files[0]);
			reader.addEventListener("load", () => {
				setImage(reader.result);
			});
		}
	}

    return(
      <div>
        <ProfilePicture> </ProfilePicture>
        <div> 
          {image ? (
            <>
              <div className='cropper'>
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              </div>

              <div className='slider'>
                <Slider
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
            </>
          ) : null}
        </div>
        <div>
            <input 
              type="file" 
              accept="image/*" 
              ref={inputRef}
              onChange={onSelectFile}
              style={{ display: "none" }}
            ></input>

            <Button className="changeAvatar"
                variant='contained'
                color='primary'
                onClick={triggerFileSelectPopup}
                style={{ marginRight: "10px" }}
            > Choose </Button>

            <Button className="changeAvatar"> Download </Button>
        </div>
      </div>
    )
}

const handleGoBack=(props)=>{
    // redirect to the previous profile page
    window.location.href = './AccountDetails'
}

export default ChangeAvatar
