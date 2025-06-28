import React, { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import Loading from "../components/Loader/Loading";
import Primary from "../components/Button/Primary";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { print } from "../utilities/helperfunction";
import axios from "axios";
import { ApiUrl } from "../utilities/appApi";
import toast from "react-hot-toast";

function Contact() {
  const [contact,setContact] = useState({})
  const [load,setLoad] = useState(false)
  const [formLoad,setFormLoad] = useState(false)


  const schema = yup
    .object()
    .shape({
      name: yup.string().required('Enter your name'),
      email: yup.string().email('Enter valid mail').required('Enter your email'),
      mobile: yup.string().required('Enter your mobile'),
      purpose: yup.string().required('Enter your purpose'),
      message: yup.string().required('Enter your message'),
    })
    .required();

  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  


  const handleFormSubmit = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("purpose", data.purpose);
    formData.append("message", data.message);
    setFormLoad(true)
    const response = await axios.post(ApiUrl().reachThrough,formData)
    if(response.status ==200){
      toast.dismiss()
      toast.success(response?.data?.message,{
        duration:2000
      })
    }
    setFormLoad(false)
    reset()
  }

  const contactApiCall = async () => {
    setLoad(true);
    const response = await axios.post(ApiUrl().contact);
    if (response.status == 200) {
      if (response?.data?.status == "success") {
        setContact(response?.data?.data);
      }
    }
    setLoad(false);
  };


  useEffect(() => {
    contactApiCall();
  }, []);
  if(load){
    return <Loading/>
  }
  return (
    <div className="contact">
      <div className="container">
        <div className="innercontact pad">
          <div className="hd">
            <h1 className="mb">
              Contact <span>Me</span>
            </h1>
          </div>
          {/* links */}
          <div className="rch_thr">
            {
              contact?.email &&
            <div className="cont">
              <div className="img">
                <img src="./assets/images/email.png" />
              </div>
              <div className="txt">
                <b>mail me</b>
                <a href={`mailto:${contact?.email}`}>
                  {contact?.email}
                </a>
              </div>
            </div>
            }
            {
              contact?.mobile &&

            <div className="cont">
              <div className="img">
                <img src="./assets/images/phone.png" />
              </div>
              <div className="txt">
                <b>call me</b>
                <a href={`tel:${contact?.mobile}`}>{contact.mobile}</a>
              </div>
            </div>
            }

            {
              contact?.address && 
            <div className="cont">
              <div className="img">
                <img src="./assets/images/map.png" />
              </div>
              <div className="txt">
                <b>address point</b>
                <p>{contact?.address}</p>
              </div>
            </div>
            }
          </div>

          {/* contact */}
          <div className="cnt">
            <div className="loc">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1539.2234953639827!2d78.14195262948131!3d9.899555574611137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731513170775!5m2!1sen!2sin"  allowFullScreen={"true"} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="frm">
              <div className="hd">
                <strong>Don't be Shy!</strong>
                <p>
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>
              <div className="db">
                <Controller 
                  name="name"
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input
                      label={'Name'}
                      placeholder={'Enter your name'}
                      type={'text'}
                      onChangeText={onChange}
                      value={value}
                      error={errors.name}
                    />

                  )}
                />
                <Controller 
                  name="email"
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input
                      type={'mail'}
                      label={'E-mail'}
                      placeholder={'Enter your email'}
                      onChangeText={onChange}
                      value={value}
                      error={errors.email}
                      />                    
                  )}
                />
              </div>
              <div className="db">
              <Controller 
                  name="mobile"
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input
                      label={'Mobile'}
                      placeholder={'Enter your mobile number'}
                      type={'number'}
                      onChangeText={onChange}
                      value={value}
                      error={errors.mobile}
                    />                    
                  )}
                />
                <Controller 
                  name="purpose"
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input
                      type={'text'}
                      onChangeText={onChange}
                      value={value}
                      label={'your purpose'}
                      placeholder={'Enter your purpose'}
                      error={errors.purpose}
                    />
                    
                  )}
                />
              </div>
              <Controller 
                  name="message"
                  control={control}
                  render={({field:{onChange,value}}) => (
                    <Input
                      textarea
                      onChangeText={onChange}
                      value={value}
                      label={'Anything to share'}
                      placeholder={'Enter the things to share'}
                      error={errors.message}
                    />                    
                  )}
                />
              <Primary
                text={formLoad ?  'Submitting' : 'submit'}
                icon={'./assets/images/send.png'}
                onClick={handleSubmit(handleFormSubmit)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
