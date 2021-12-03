export const cloudinaryUpload = async(file) => {

    const cloudURL = 'https://api.cloudinary.com/v1_1/diqhctpcx/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'wabikeUsrImg')
    formData.append('file', file)

    const resp = await fetch(cloudURL, {
        method: 'POST',
        body: formData
    })

    const cloudRet = await resp.json()
    return cloudRet.secure_url
}