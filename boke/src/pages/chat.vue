<template>
  <div class="all" ref="all">
<!--    <Header class="header"></Header>-->
    <div class="chatBox">
      <div class="friend-aside">
        <div class="user-img"></div>
        <p>Cavalry</p>
        <div class="friend-menu">
          <div class="friend-item active">
            <svg t="1682733497615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="939" width="200" height="200"><path d="M288.937507 904.227247c-24.410828 0-63.650663-0.342208-98.327726-13.916453-45.969923-18.022948-70.266682-54.52512-70.266682-105.514091V512.627381H72.319929c-7.186365 0-13.574245-4.448702-16.08377-11.17879-2.509524-6.730088-0.456277-14.258661 5.019049-18.935502l433.007018-367.531247c6.501949-5.475326 15.9697-5.361257 22.35758 0.228139l418.976496 367.531247c5.361257 4.676841 7.186365 12.205414 4.67684 18.935501-2.509524 6.616019-8.897404 11.064721-15.9697 11.064721h-50.190487c1.825109 75.399799 4.448702 220.039657-1.4829 279.355687-2.965801 30.228361-8.783335 61.483346-43.460399 82.814303-33.194163 20.418403-89.430322 29.543946-182.168653 29.543946h-82.472096c-9.467751 0-17.110393-7.642642-17.110393-17.110393V732.667038h-98.213657v154.449816c0 4.562772-1.825109 8.897404-5.019049 12.091345-3.19394 3.19394-7.528573 5.019049-12.091344 5.019048H288.937507z m-169.963239-425.820652h18.479224c9.467751 0 17.110393 7.642642 17.110393 17.110393v289.393784c0 37.186588 15.399354 60.570792 48.479448 73.574691 29.543946 11.635067 66.046118 11.635067 87.719283 11.520998h124.107385V728.104266c0-16.311908 13.232037-29.543946 29.543946-29.543945H552.095355c16.311908 0 29.543946 13.232037 29.543945 29.543945v142.016264h65.361703c83.726858 0 137.453492-7.98485 164.259775-24.410827 19.733987-12.091345 24.524897-28.061045 27.376629-57.034645 6.159742-62.395901 2.623594-225.400913 0.798485-292.587724-0.114069-4.562772 1.59697-9.125543 4.79091-12.433552s7.642642-5.133118 12.205414-5.133118h22.35758L505.212877 150.57146 118.974268 478.406595z" p-id="940" fill="#515151"></path></svg>
            <a>聊天</a>
          </div>
          <div class="friend-item">
            <svg t="1682733677437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1979" width="200" height="200"><path d="M856.839408 904.567263H156.189971c-9.387232 0-16.964877-7.577645-16.964877-16.964877 0-238.865474 90.253148-349.589574 172.589353-400.823504-25.899713-38.67992-40.037111-84.598189-40.037111-131.42125 0-130.06406 105.747736-235.811796 235.811796-235.811796s235.811796 105.747736 235.811796 235.811796c0 47.04926-14.250497 93.080627-40.376408 131.873647 43.769384 24.88182 79.961122 59.377071 107.670421 102.580959 24.88182 38.79302 42.977689 84.711288 53.722112 136.397614 18.208968 87.312569 9.387232 160.374641 9.047935 163.428319-0.904793 8.482439-8.143141 14.929092-16.62558 14.929092z m-683.57146-33.929755h667.850674c1.583389-24.994919 2.601281-78.717031-9.952728-138.433399-22.732936-107.557323-76.794345-182.994478-160.827038-223.936382-4.637066-2.261984-8.030042-6.559753-9.161034-11.536117-1.130992-5.089463 0.113099-10.292026 3.392975-14.363596 28.953391-35.739342 45.013475-80.865916 45.013475-127.010382 0-111.289596-90.592445-201.882041-201.882041-201.882041s-201.882041 90.592445-201.882041 201.882041c0 46.370665 15.26839 89.91385 44.22178 125.992489 3.166777 3.958471 4.410868 9.047935 3.392976 14.024299-1.017893 4.976364-4.18467 9.161034-8.595538 11.536117-76.455047 40.941904-167.160592 137.302408-171.57146 363.726971z" p-id="1980" fill="#515151"></path><path d="M690.244312 783.551138h-42.638392c-16.851778 0-30.536779-13.685001-30.536779-30.53678v-86.068478c0-16.851778 13.685001-30.536779 30.536779-30.536779h42.638392c16.851778 0 30.536779 13.685001 30.536779 30.536779v86.068478c0 16.851778-13.685001 30.536779-30.536779 30.53678z m-39.245416-33.929755h35.85244v-79.282527h-35.85244v79.282527z" p-id="1981" fill="#515151"></path></svg>
            <a>测试</a>
          </div>
          <div class="friend-item">
            <svg t="1682733698113" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2337" width="200" height="200"><path d="M533.730199 861.109056c-47.795032 0-94.107163-9.467751-137.68163-28.289183-117.833575 20.646541-235.55308 0.342208-240.572129-0.570346-7.642642-1.368831-13.346107-7.642642-14.030523-15.285285s3.878356-14.943077 11.178791-17.56667c32.509747-11.863206 68.327504-36.045895 106.654784-71.749583-48.13724-61.255208-74.601314-137.225354-74.601314-215.590954 0-93.194608 36.274034-180.913891 102.206082-246.84594 65.932049-65.932049 153.537262-102.206082 246.845939-102.206082s180.913891 36.274034 246.84594 102.206082c65.932049 65.932049 102.206082 153.537262 102.206082 246.84594S846.394118 692.856856 780.46207 758.788905c-65.932049 65.932049-153.537262 102.320151-246.731871 102.320151zM398.101816 797.914671c2.395455 0 4.79091 0.456277 6.958226 1.482901 40.608667 18.137017 83.840927 27.376629 128.556088 27.376629 173.613457 0 314.831235-141.217779 314.831235-314.831236s-141.217779-314.831235-314.831235-314.831235-314.831235 141.217779-314.831235 314.831235c0 75.627938 27.148491 148.746352 76.540492 205.780996 5.931603 6.844157 5.475326 17.110393-1.026623 23.384204-26.920352 26.350006-53.042219 47.680962-78.137463 63.764732 45.513646 3.650217 113.042665 5.361257 178.632505-6.844157 1.140693 0 2.281386-0.114069 3.30801-0.114069z" p-id="2338" fill="#515151"></path><path d="M634.339312 464.946419c-48.251309 0-87.491144-39.239835-87.491144-87.491144s39.239835-87.491144 87.491144-87.491144 87.491144 39.239835 87.491144 87.491144-39.239835 87.491144-87.491144 87.491144z m0-140.761502c-29.429876 0-53.270358 23.840481-53.270358 53.270358s23.840481 53.270358 53.270358 53.270357 53.270358-23.840481 53.270357-53.270357-23.954551-53.270358-53.270357-53.270358zM704.720062 605.936059h-171.103932c-9.467751 0-17.110393-7.642642-17.110393-17.110393s7.642642-17.110393 17.110393-17.110394h171.103932c9.467751 0 17.110393 7.642642 17.110394 17.110394s-7.642642 17.110393-17.110394 17.110393zM704.720062 689.206639h-344.48925c-9.467751 0-17.110393-7.642642-17.110393-17.110393s7.642642-17.110393 17.110393-17.110393h344.48925c9.467751 0 17.110393 7.642642 17.110394 17.110393s-7.642642 17.110393-17.110394 17.110393z" p-id="2339" fill="#515151"></path></svg>
            <a>测试</a>
          </div>
          <div class="friend-item">
            <svg t="1682733775330" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="939" width="200" height="200"><path d="M753.541718 715.442575c-5.019049 0-10.038097-2.167316-13.346107-6.38788-5.931603-7.414504-4.676841-18.137017 2.623594-24.068619l57.262782-45.855854c7.414504-5.931603 18.137017-4.676841 24.06862 2.623593s4.676841 18.137017-2.623594 24.06862L764.264231 711.678289c-3.19394 2.623594-6.958227 3.764287-10.722513 3.764286z" p-id="940" fill="#515151"></path><path d="M868.067283 715.442575c-3.764287 0-7.528573-1.254762-10.722513-3.764286l-57.262783-45.855854c-7.414504-5.931603-8.555197-16.654116-2.623593-24.06862 5.931603-7.414504 16.654116-8.555197 24.068619-2.623593l57.262783 45.855854c7.414504 5.931603 8.555197 16.654116 2.623594 24.068619-3.422079 4.220564-8.327058 6.38788-13.346107 6.38788z" p-id="941" fill="#515151"></path><path d="M810.8045 784.454495c-9.467751 0-17.110393-7.642642-17.110393-17.110393V652.476328c0-9.467751 7.642642-17.110393 17.110393-17.110393s17.110393 7.642642 17.110394 17.110393v114.867774c0 9.467751-7.642642 17.110393-17.110394 17.110393z" p-id="942" fill="#515151"></path><path d="M700.613568 751.944748H151.141807c-8.555197 0-15.741562-6.273811-16.882255-14.714938-42.661914-298.519327-30.228361-371.409602 3.764287-392.170213 27.490698-16.882255 61.825554 7.414504 84.525342 23.384204 46.768408 32.966024 86.806728 38.099142 126.160633 16.197839 35.361479-19.733987 64.677286-58.745683 88.17556-90.114738 15.171215-20.190264 28.289183-37.642865 41.293082-48.479447 40.266459-33.308232 78.251532-46.312131 113.042665-38.441351 29.087668 6.501949 55.323605 27.148491 80.07664 62.966248 20.190264 29.201738 36.84438 64.905425 51.559318 96.274479 15.9697 34.106717 35.817756 76.540492 49.962348 81.559541 51.445249 18.479225 88.06149 45.171438 108.936171 79.506294 17.224463 28.289183 23.612343 61.255208 19.049571 97.985518-0.798485 6.273811-4.904979 11.520998-10.722513 13.802384-5.817534 2.281386-12.547622 1.140693-17.338532-2.851732-17.224463-14.714938-39.239835-22.813858-61.939624-22.813858-52.81408 0-95.818202 43.004122-95.818202 95.818202 0 7.072296 0.798485 14.258661 2.395455 21.102819 1.140693 5.019049-0.114069 10.380305-3.308009 14.486799-3.308009 4.106494-8.212989 6.501949-13.460176 6.50195z m-534.642754-34.220787H680.99365c-0.114069-2.623594-0.228139-5.247187-0.228138-7.756711 0-71.749582 58.289406-130.038989 130.038988-130.038989 19.848056 0 39.239835 4.562772 56.806506 13.117968-4.334633-50.874903-39.924251-88.517768-106.312577-112.358249-27.490698-9.924028-45.969923-49.277932-69.354127-99.35435-27.034421-57.833129-60.684861-129.81085-108.023616-140.419293-23.954551-5.361257-52.129665 5.247187-83.726857 31.483123-9.924028 8.212989-22.47165 24.981174-35.703688 42.661914-25.437451 33.992648-57.148713 76.198285-98.898072 99.468419C314.831235 442.816977 260.077977 436.771304 203.043333 396.390776c-10.836582-7.642642-23.384204-16.08377-33.422301-20.190264-3.764287-1.482901-10.380305-3.878356-13.460176-1.939177-2.395455 1.482901-14.37273 12.205414-14.600869 79.278155-0.456277 57.604991 7.642642 144.069511 24.410827 264.184471z" p-id="943" fill="#515151"></path><path d="M810.8045 840.006238c-29.658015 0-58.745683-10.266236-81.787679-28.973599-22.699788-18.365155-38.669489-44.144815-45.057369-72.433998-2.167316-9.353682-3.19394-19.049571-3.19394-28.631391 0-71.749582 58.289406-130.038989 130.038988-130.038989 30.798708 0 60.684861 10.950652 84.183135 30.912777 29.201738 24.753036 45.855854 60.913 45.855854 99.126212 0 71.635513-58.403476 130.038989-130.038989 130.038988z m0-225.85719c-52.81408 0-95.818202 43.004122-95.818202 95.818202 0 7.072296 0.798485 14.258661 2.395455 21.102818 9.695889 43.23226 49.049794 74.715384 93.422747 74.715384 52.81408 0 95.818202-43.004122 95.818202-95.818202 0-28.175114-12.319483-54.753258-33.878578-73.004345-17.224463-14.714938-39.239835-22.813858-61.939624-22.813857zM292.017378 574.452935c-9.353682 0-18.935502-0.570346-28.745461-1.711039-42.433775-4.904979-74.715384-18.365155-76.084215-18.935502-8.669266-3.650217-12.77576-13.688315-9.125543-22.47165 3.650217-8.669266 13.688315-12.77576 22.35758-9.125543 1.59697 0.684416 115.095912 47.110616 181.484238-12.433552l2.053247-1.939178c16.540047-14.829007 39.239835-35.24741 69.810404-44.030745 36.958449-10.608444 75.28573-0.912554 114.069289 28.74546 7.528573 5.703464 8.897404 16.425977 3.19394 23.954551s-16.425977 8.897404-23.954551 3.19394c-67.643088-51.673388-109.620586-14.030522-140.305224 13.574245l-2.167317 1.939178c-28.631391 25.893728-67.186811 39.239835-112.586387 39.239835zM324.070848 662.058149c-40.03832 0-74.145037-14.030522-76.426423-15.057146-8.669266-3.650217-12.77576-13.688315-9.125543-22.47165 3.650217-8.669266 13.688315-12.77576 22.35758-9.125543 0.798485 0.342208 78.59374 32.281609 123.42297-7.870781l1.482901-1.368832c12.091345-10.836582 28.631391-25.779659 51.445249-32.281608 27.832906-7.98485 56.464298-0.798485 85.209758 21.216887 7.528573 5.703464 8.897404 16.425977 3.19394 23.954551s-16.425977 8.897404-23.954551 3.19394c-44.601092-34.106717-71.521444-10.038097-93.080539 9.353682l-1.4829 1.368831c-24.981174 22.35758-55.437674 29.087668-83.042442 29.087669z" p-id="944" fill="#515151"></path></svg>
            <a>测试</a>
          </div>
          <div class="friend-item">
            <svg t="1682733792685" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1145" width="200" height="200"><path d="M743.61769 898.751922h-463.12131c-16.996324 0-30.798708-13.802384-30.798708-30.798708v-711.792358c0-16.996324 13.802384-30.798708 30.798708-30.798708h5.133118l139.620808 91.25543H626.240392l111.331625-91.25543h6.159742c16.996324 0 30.798708 13.802384 30.798708 30.798708v711.792358c-0.114069 16.882255-14.030522 30.798708-30.912777 30.798708z m-459.699232-34.220787h456.277153V167.339646l-101.863874 83.384649H414.98407l-131.065612-85.666035v699.472875z" p-id="1146" fill="#515151"></path><path d="M672.096246 159.582934H351.903754c-9.467751 0-17.110393-7.642642-17.110393-17.110393s7.642642-17.110393 17.110393-17.110393h320.078423c9.467751 0 17.110393 7.642642 17.110393 17.110393s-7.528573 17.110393-16.996324 17.110393zM512.057035 847.76295c-30.228361 0-54.753258-24.524897-54.753259-54.753259s24.524897-54.753258 54.753259-54.753258 54.753258 24.524897 54.753258 54.753258-24.638966 54.753258-54.753258 54.753259z m0-75.28573c-11.29286 0-20.532472 9.239612-20.532472 20.532471s9.239612 20.532472 20.532472 20.532472 20.532472-9.239612 20.532472-20.532472-9.239612-20.532472-20.532472-20.532471z" p-id="1147" fill="#515151"></path></svg>
            <a>测试</a>
          </div>
        </div>
      </div>
      <div class="friend-body">
        <div class="friend-list-box">
          <h1>列表</h1>
          <div class="search-box">
            <svg t="1682735903805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2308" width="200" height="200"><path d="M467.92892 935.905986a467.92892 467.92892 0 1 1 331.010811-136.918108 466.424325 466.424325 0 0 1-331.010811 136.918108zM467.92892 150.507607a317.46946 317.46946 0 1 0 225.689189 93.284865 315.964865 315.964865 0 0 0-225.689189-93.284865zM771.556109 922.515094l151.587906-151.587905 101.033527 101.108757-151.587905 151.587905z" fill="#8a8a8a" p-id="2309"></path></svg>
            <input type="text" placeholder="搜索..."/>
          </div>
          <div class="friend-list">
            <div class="friend-list-item active">
              <img src="../assets/qun.jpg" alt="">
              <div>
                <p>测试群</p>
                <p>理性发言</p>
              </div>
            </div>
            <div class="friend-list-item">
              <img src="../assets/Tom.jpg" alt="">
              <div>
                <p>Cavalry</p>
                <p>穷其道者 归处亦同</p>
              </div>
            </div>
          </div>
        </div>
        <div class="friend-message">
          <div class="friend-message-header">
            <img src="../assets/qun.jpg">
            <div style="margin-left: 10px">
              <p>测试群</p>
              <p>理性发言</p>
            </div>
          </div>
          <div class="friend-message-body" ref="messageBody">
            <div v-for="(item,index) in messageList" :key="index" :class="[item.username === 'Cavalry' ? 'friend-message-left-box':'friend-message-right-box','line']">
              <img src="../assets/nv5.jpg" alt="">
              <div class="message">
                {{ item.message }}
              </div>
            </div>
          </div>
          <div class="send-box">
            <div class="send-message">
              <svg style="margin-right: 3px" t="1682758599412" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8933" width="200" height="200"><path d="M896 626.592a16 16 0 0 0-7.68-13.664l-172.448-105.088a16 16 0 0 0-20.704 3.52l-76 92.608-1.024 1.152a16 16 0 0 1-22.624 0.032l-252.832-252.064a16.032 16.032 0 0 0-22.08-0.512l-187.36 170.656a15.936 15.936 0 0 0-5.248 11.84V800h768v-173.408z" p-id="8934" fill="#707070"></path><path d="M800 320m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="8935" fill="#707070"></path><path d="M32 128v768h960V128H32z m896 704H96V192h832v640z" p-id="8936" fill="#707070"></path></svg>
              <svg style="margin-right: 3px" t="1682758750380" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10093" width="200" height="200"><path d="M563.2 463.3L677 540c1.7 1.2 3.7 1.8 5.8 1.8 0.7 0 1.4-0.1 2-0.2 2.7-0.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6 0.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-0.7-0.1-1.3-0.2-2-0.2-2.1 0-4.1 0.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5 0.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4z m333.8 241.3l-41-20a10.3 10.3 0 0 0-8.1-0.5c-2.6 0.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7 0.5-9.9 5.5-9.5 11.2l3.9 45.5c0.5 5.3 5 9.5 10.3 9.5h0.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 0.3-11.2-4.8-13.6z m186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3 0.1 0.2 0.3 0.3 0.4 0.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129z m-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-0.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z" p-id="10094" fill="#707070"></path></svg>
              <input v-model="message" type="text" placeholder="发送消息...">
            </div>
            <svg @click="send" t="1682757625808" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7179" width="200" height="200"><path d="M211.649242 813.217191a425.984 425.984 0 1 0 602.421836-602.442865 425.984 425.984 0 1 0-602.421836 602.442865Z" fill="#00A0E9" p-id="7180"></path><path d="M266.3936 427.7248l422.5024-103.5776c20.4288-5.0176 37.5296 15.9744 28.4672 34.9696l-188.2112 395.1616c-9.728 20.3776-39.3728 18.432-46.2848-3.072l-48.0256-149.4016a25.06752 25.06752 0 0 1 5.2224-24.3712L522.1888 486.4c5.0176-5.5808-1.6896-13.9264-8.192-10.0864l-108.9024 63.5392a24.9856 24.9856 0 0 1-24.6272 0.3072L260.2496 473.8048c-19.8656-10.9568-15.9232-40.6528 6.144-46.08z" fill="#FFFFFF" p-id="7181"></path></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header";
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.clouds'
export default {
  name: "chat",
  data(){
    return{
      messageList:[
        {username:"Cavalry",message:"穷只是暂时的，只要你努力，你会发现你慢慢就习惯了。"},
        {username:"Cavalry",message:"感觉这辈子，最深情绵长的注视，都给了手机。"},
        {username:"Cavalry",message:"今天是我第一天当电焊工 天气很暖和 风也吹的很舒服 我站在树下点了一根烟 我不想再做电焊工了 我把自己的心关起来锁在了一个很深的地方 我是一个不称职的电焊工 我电不到你 也焊不牢你的心"},
        {username:"Cavalry11",message:"你醒了吧？可以回我消息了吗？我买了万通筋骨贴，你运动一个晚上腰很疼吧？今晚早点回家 我炖了排骨汤 累了一个晚上吧 没事我永远在家等你"},
        {username:"Cavalry",message:"天黑路滑，社会复杂，水浅王八多，遍地是大哥，不是社会人，别唠社会嗑！"},
        {username:"Cavalry",message:"天黑路滑，"},

        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},
        {username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},{username:"Cavalry",message:"天黑路滑，"},

      ],
      message:''
    }
  },
  methods:{
    send(){
      if(this.message == ""){
        this.$message({
          showClose: true,
          message: "发言为空",
          type: 'warning'
        });
      }else {
        var messages = {username:"Cavalry",message:this.message}
        this.messageList.push(messages)
        this.message = ''
        this.scrollToBottom()
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.$refs.messageBody.scrollTo({
          top: this.$refs.messageBody.scrollHeight,
          behavior: 'smooth'
        });
      });
    }
  },
  components:{
    Header
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.messageBody.scrollTo({
        top: this.$refs.messageBody.scrollHeight,
        behavior: 'auto'
      });
    });
    this.vantaEffect = CLOUDS({
      el:this.$refs.all,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      speed:1.5,
      THREE:THREE
    })
    this.$axios({
      url:'/chat',
      method:'get',
    }).then(res => {
    })
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
}
</script>

<style scoped>
@keyframes zhuye {
  from{
    opacity: 0;
    transform: translate(0px,-50px);
  }
  to{
    opacity: 1;
    transform: translate(0px,0px);
  }
}
.icon{
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.icon1{
  width: 50px;
  height: 50px;
}
.all{
  align-items: center;
  /*background: #e9e9e9 url("@/assets/nv7.jpg") no-repeat fixed center;*/
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
  animation: zhuye 1s ease 0s 1 normal none running;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
}
.chatBox{
  height: 700px;
  width: 80%;
  background-color: white;
  opacity: 1;
  border-radius: 10px;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
}
.friend-aside{
  width: 20%;
  height: 100%;
  background-color: rgb(243,246,240);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.user-img{
  border-radius: 100%;
  background: url("../assets/nv5.jpg") no-repeat;
  background-size: cover;
  border: 5px solid white;
  margin-top: 15%;
  height: 120px;
  width: 120px;
}
.friend-aside p{
  font-size: 20px;
}
.friend-menu{
  margin-top: 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;
  width: 80%;
}
.friend-item{
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 400px;
  transition: all .3s;
}
.friend-item.active{
  background-color: orange;
  color: white;
}
.friend-item.active svg{
  transform: translateX(100%);
}
.friend-item.active a{
  transform: translateX(100%);
}
.friend-item svg,a{
  transition: all .5s;
}
.friend-item:hover{
  background-color: orange;
}
.friend-item:hover svg{
  color: white;
  transform: translateX(100%);
}
.friend-item:hover a{
  color: white;
  transform: translateX(100%);
}


.friend-body{
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.friend-list-box{
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.friend-list-box h1{
  margin-top: 20px;
  font-weight: 300;
}
.search-box{
  margin-top: 20px;
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #8a8a8a;
}
.search-box svg{
  width: 30px;
  height: 30px;
}
.search-box input{
  font-size: 20px;
  height: 60%;
  width: 80%;
  border: none;
}
.friend-list{
  margin-top: 30px;
  height: 80%;
  width: 80%;
}
.friend-list-item{
  border-radius: 15px;
  width: 80%;
  height: 50px;
  margin: 0px auto 30px auto;
  display: flex;
  align-items: center;
  background-color: rgb(247,245,246);
  transition: all .5s;
  overflow: hidden;
  box-shadow: 0 1px 13px -6px #8a8a8a;
}
.friend-list-item:hover,.friend-list-item.active{
  transform: scale(1.2);
}

.friend-list-item img{
  border-radius: 100%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  margin-left: 10px;
}
.friend-list-item p:nth-child(1){
  margin-left: 5px;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 5px;
}
.friend-list-item p:nth-child(2){
  width: 99%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.friend-message{
  width: 65%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.friend-message-header{
  height: 90px;
  width: 93%;
  border-bottom: 2px solid #8a8a8a;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.friend-message-header img{
  border-radius: 100%;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  margin-left: 10px;
}
.friend-message-header p:nth-child(1){
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 5px;
}
.friend-message-header p:nth-child(2){
  width: 99%;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.friend-message-body{
  margin-top: 0px;
  height: 75%;
  width: 95%;
  padding: 10px;
  overflow: auto;
}
.friend-message-body::-webkit-scrollbar{
  width: 8px;
  height: 8px;
}
.friend-message-body::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background-color: rgb(202,202,202);
}
.friend-message-right-box{
  display: flex;
  margin: 20px 0px;
  align-items: flex-start;
}
.friend-message-left-box{
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
  align-items: flex-start;
}
.line img{
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
}
.message{
  font-size: 18px;
  border-radius: 4px;
  max-width: 60%;
  padding: 10px 10px;
  word-break: break-all;
  margin: 0 12px 0 12px;
  position: relative;
  background-color: #cfe7ff;
}
.friend-message-left-box .message:before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: #cfe7ff transparent transparent #cfe7ff;
  right: -6px;
}
.friend-message-right-box .message:before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: transparent #cfe7ff #cfe7ff transparent;
  left: -6px;
}
.send-box{
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.send-message{
  width: 80%;
  border: 3px solid #8a8a8a;
  height: 50px;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.send-message input{
  height: 100%;
  width: 80%;
  border: none;
  font-size: 20px;
  outline: none;
}
</style>