import * as Yup from 'yup'

//Insert Values form
export interface FormProps {
    name: string;
    tags: string;
    file: string | Blob;
}

//Values default start
export const formScheme: FormProps = {name: '', tags: '', file: ''}


export const formValidationScheme = Yup.object().shape({
    name: Yup.string().trim().required('Name is Required').max(50, 'Name has the limit of 50 characters!'),
    tags: Yup.string().trim().required('Tags Are Required').max(50, 'Tags has the limit of 50 characters!'),
    file: Yup.mixed<Blob>()
    .required('Select an Image to Upload!')
    .test('size', 'File size cannot be higher than 20 MB', (file) => {
        return file.size < 20000000
    })
    .test('type', 'Accpeted formats: JPEG,GIF or PNG', (file) => {
        return file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif'
    })
})

