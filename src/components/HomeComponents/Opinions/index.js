import React, { useState } from 'react'
import Marquee from "react-fast-marquee";


const Opinions = () => {

     const [play, setPlay] = useState(true)

     const options = {
          gradient: false,
          speed: 25,
     }

     const data = [
          { img: '/assets/images/users/1.webp', name: 'Sadoqat Kaziyev', nick: '@sadoqat', desc: 'A dictum amet vivamus nisi sed mi elementum vitae. Pretium mi mattis facilisis nullam vestibulum, natoque nisl egestas. Hendrerit faucibus tortor, quis rhoncus, ultricies. Commodo.' },
          { img: '/assets/images/users/2.webp', name: 'Kumush Aliyeva', nick: '@kumushoy', desc: 'Arcu, urna, odio pellentesque nullam vestibulum eget habitant. Aenean fringilla massa est tortor integer vitae. Arcu turpis cursus consectetur dolor.' },
          { img: '/assets/images/users/3.webp', name: 'Sunnatillo', nick: '@sunn4at', desc: 'Feugiat facilisi fusce eu scelerisque viverra id id eleifend. Lectus dictumst tincidunt ultrices.' },
          { img: '/assets/images/users/4.webp', name: 'Madina Mavlonova', nick: '@madina03', desc: 'Bibendum metus phasellus facilisi augue enim nisi aliquam turpis pulvinar. Suscipit tortor phasellus quisque rutrum pharetra vitae. Consectetur id venenatis a eu erat cras ut egestas. Aliquet parturient egestas libero euismod eget tellus nibh viverra ornare.' },
          { img: '/assets/images/users/1.webp', name: 'Unknown', nick: '@Anonymus', desc: 'Aliquam sit duis eu massa quis vel. Duis mattis amet non feugiat lectus porta urna. Elementum non nullam feugiat ac senectus. Duis interdum aliquet.' },
          { img: '/assets/images/users/6.webp', name: 'Nodirbek Abdunazarov', nick: '@devnodir', desc: 'A dictum amet vivamus nisi sed mi elementum vitae. Pretium mi mattis facilisis nullam vestibulum, natoque nisl egestas. Hendrerit faucibus tortor, quis rhoncus, ultricies. Commodo.' },
          { img: '/assets/images/users/7.webp', name: 'Izzat_1.k', nick: '@izzat_karimov', desc: 'Feugiat facilisi fusce eu scelerisque viverra id id eleifend. Lectus dictumst tincidunt ultrices.' },
          { img: '/assets/images/users/8.webp', name: 'Sherali Aliyev', nick: '@sheyxcha', desc: 'Aliquam sit duis eu massa quis vel. Duis mattis amet non feugiat lectus porta urna. Elementum non nullam feugiat ac senectus. Duis interdum aliquet.' },
          { img: '/assets/images/users/9.webp', name: 'Shaxlo Islomova', nick: '@shaxloxon', desc: 'Bibendum metus phasellus facilisi augue enim nisi aliquam turpis pulvinar. Suscipit tortor phasellus quisque rutrum pharetra vitae. Consectetur id venenatis a eu erat cras ut egestas. Aliquet parturient egestas libero euismod eget tellus nibh viverra ornare.' },
          { img: '/assets/images/users/1.webp', name: 'Sadoqat Kaziyev', nick: '@sadoqat', desc: 'A dictum amet vivamus nisi sed mi elementum vitae. Pretium mi mattis facilisis nullam vestibulum, natoque nisl egestas. Hendrerit faucibus tortor, quis rhoncus, ultricies. Commodo.' },
          { img: '/assets/images/users/2.webp', name: 'Kumush Aliyeva', nick: '@kumushoy', desc: 'Arcu, urna, odio pellentesque nullam vestibulum eget habitant. Aenean fringilla massa est tortor integer vitae. Arcu turpis cursus consectetur dolor.' },
          { img: '/assets/images/users/3.webp', name: 'Sunnatillo', nick: '@sunn4at', desc: 'Feugiat facilisi fusce eu scelerisque viverra id id eleifend. Lectus dictumst tincidunt ultrices.' },
          { img: '/assets/images/users/4.webp', name: 'Madina Mavlonova', nick: '@madina03', desc: 'Bibendum metus phasellus facilisi augue enim nisi aliquam turpis pulvinar. Suscipit tortor phasellus quisque rutrum pharetra vitae. Consectetur id venenatis a eu erat cras ut egestas. Aliquet parturient egestas libero euismod eget tellus nibh viverra ornare.' },
          { img: '/assets/images/users/1.webp', name: 'Unknown', nick: '@Anonymus', desc: 'Aliquam sit duis eu massa quis vel. Duis mattis amet non feugiat lectus porta urna. Elementum non nullam feugiat ac senectus. Duis interdum aliquet.' },
          { img: '/assets/images/users/6.webp', name: 'Nodirbek Abdunazarov', nick: '@devnodir', desc: 'A dictum amet vivamus nisi sed mi elementum vitae. Pretium mi mattis facilisis nullam vestibulum, natoque nisl egestas. Hendrerit faucibus tortor, quis rhoncus, ultricies. Commodo.' },
          { img: '/assets/images/users/7.webp', name: 'Izzat_1.k', nick: '@izzat_karimov', desc: 'Feugiat facilisi fusce eu scelerisque viverra id id eleifend. Lectus dictumst tincidunt ultrices.' },
          { img: '/assets/images/users/8.webp', name: 'Sherali Aliyev', nick: '@sheyxcha', desc: 'Aliquam sit duis eu massa quis vel. Duis mattis amet non feugiat lectus porta urna. Elementum non nullam feugiat ac senectus. Duis interdum aliquet.' },
          { img: '/assets/images/users/9.webp', name: 'Shaxlo Islomova', nick: '@shaxloxon', desc: 'Bibendum metus phasellus facilisi augue enim nisi aliquam turpis pulvinar. Suscipit tortor phasellus quisque rutrum pharetra vitae. Consectetur id venenatis a eu erat cras ut egestas. Aliquet parturient egestas libero euismod eget tellus nibh viverra ornare.' },
     ]

     return (
          <section className='opinions'>
               <div className="main">
                    <h1 className="title title-black">Biz haqimizda fikrlar<span className='text-primary'>.</span></h1>
                    <p className="opinions-desc">Yaxshi va sifatli ta‘lim olishingiz uchun biz sizga o‘zimiz ishlab chiqgan kitoblarni beramiz</p>
                    <div>
                         <Marquee {...options} play={play} pauseOnHover={!play}>
                              {
                                   data.map((item, i) => (
                                        <div className="opinions-item" key={i} onMouseMove={() => setPlay(false)} onMouseLeave={() => setPlay(true)} >
                                             <p className="desc">{item.desc}</p>
                                             <div className="user">
                                                  <div className="user-img">
                                                       <img src={item.img} alt="" />
                                                  </div>
                                                  <div className="user-info">
                                                       <span>{item.name}</span>
                                                       <span>{item.nick}</span>
                                                  </div>
                                             </div>
                                        </div>
                                   ))
                              }
                         </Marquee>
                         <Marquee {...options} direction='right' play={play} pauseOnHover={!play}>
                              {
                                   data.map((item, i) => (
                                        <div className="opinions-item" key={i} onMouseMove={() => setPlay(false)} onMouseLeave={() => setPlay(true)}>
                                             <p className="desc">{item.desc}</p>
                                             <div className="user">
                                                  <div className="user-img">
                                                       <img src={item.img} alt="" />
                                                  </div>
                                                  <div className="user-info">
                                                       <span>{item.name}</span>
                                                       <span>{item.nick}</span>
                                                  </div>
                                             </div>
                                        </div>
                                   ))
                              }
                         </Marquee>
                    </div>
               </div>
               <div className="cycle-1"></div>
               <div className="cycle-2"></div>
          </section>
     )
}

export default Opinions
