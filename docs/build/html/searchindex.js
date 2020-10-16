Search.setIndex({docnames:["cli","delivery","excep","files","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["cli.rst","delivery.rst","excep.rst","files.rst","index.rst","modules.rst"],objects:{"cli_code.crypto_ds":{ECDHKey:[3,1,1,""],get_project_private:[3,4,1,""]},"cli_code.crypto_ds.ECDHKey":{"private":[3,3,1,""],"public":[3,3,1,""],del_priv_key:[3,2,1,"id0"],generate_encryption_key:[3,2,1,"id1"],public_to_hex:[3,2,1,"id2"]},"cli_code.data_deliverer":{DataDeliverer:[1,1,1,""],DeliverySystemException:[1,5,1,""],update_progress_bar:[1,4,1,""]},"cli_code.data_deliverer.DataDeliverer":{"private":[1,3,1,""],"public":[1,3,1,""],LOGGER:[1,3,1,""],PROGRESS:[1,3,1,""],TO_PRINT:[1,3,1,""],break_on_fail:[1,3,1,""],bucketname:[1,3,1,""],data:[1,3,1,""],failed:[1,3,1,""],finalize_delivery:[1,2,1,""],get:[1,2,1,""],logfile:[1,3,1,""],method:[1,3,1,""],overwrite:[1,3,1,""],prep_upload:[1,2,1,""],project_id:[1,3,1,""],project_owner:[1,3,1,""],put:[1,2,1,""],s3project:[1,3,1,""],set_progress:[1,2,1,""],update_delivery:[1,2,1,""],user:[1,3,1,""]},"cli_code.exceptions_ds":{DeliverySystemException:[2,5,1,""],S3Error:[2,5,1,""],printout_error:[2,4,1,""]},"cli_code.file_handler":{aead_decrypt_chacha:[3,4,1,""],aead_encrypt_chacha:[3,4,1,""],check_last_nonce:[3,4,1,""],compress_file:[3,4,1,""],decompress_file:[3,4,1,""],file_deleter:[3,4,1,""],file_reader:[3,4,1,""],file_writer:[3,4,1,""],get_root_path:[3,4,1,""],is_compressed:[3,4,1,""],process_file:[3,4,1,""],reverse_processing:[3,4,1,""]},"cli_code.s3_connector":{S3Connector:[1,1,1,""]},"cli_code.s3_connector.S3Connector":{bucket:[1,3,1,""],bucketname:[1,3,1,""],delete_item:[1,2,1,""],file_exists_in_bucket:[1,2,1,""],project:[1,3,1,""],resource:[1,3,1,""],session:[1,3,1,""]},"ds_deliver-get":{"--break-on-fail":[0,6,1,"cmdoption-ds_deliver-get-break-on-fail"],"--creds":[0,6,1,"cmdoption-ds_deliver-get-c"],"--data":[0,6,1,"cmdoption-ds_deliver-get-d"],"--nobreak-on-fail":[0,6,1,"cmdoption-ds_deliver-get-break-on-fail"],"--password":[0,6,1,"cmdoption-ds_deliver-get-pw"],"--pathfile":[0,6,1,"cmdoption-ds_deliver-get-f"],"--project":[0,6,1,"cmdoption-ds_deliver-get-p"],"--username":[0,6,1,"cmdoption-ds_deliver-get-u"],"-c":[0,6,1,"cmdoption-ds_deliver-get-c"],"-d":[0,6,1,"cmdoption-ds_deliver-get-d"],"-f":[0,6,1,"cmdoption-ds_deliver-get-f"],"-p":[0,6,1,"cmdoption-ds_deliver-get-p"],"-pw":[0,6,1,"cmdoption-ds_deliver-get-pw"],"-u":[0,6,1,"cmdoption-ds_deliver-get-u"]},"ds_deliver-put":{"--break-on-fail":[0,6,1,"cmdoption-ds_deliver-put-break-on-fail"],"--creds":[0,6,1,"cmdoption-ds_deliver-put-c"],"--data":[0,6,1,"cmdoption-ds_deliver-put-d"],"--nobreak-on-fail":[0,6,1,"cmdoption-ds_deliver-put-break-on-fail"],"--overwrite":[0,6,1,"cmdoption-ds_deliver-put-overwrite"],"--owner":[0,6,1,"cmdoption-ds_deliver-put-o"],"--password":[0,6,1,"cmdoption-ds_deliver-put-pw"],"--pathfile":[0,6,1,"cmdoption-ds_deliver-put-f"],"--project":[0,6,1,"cmdoption-ds_deliver-put-p"],"--username":[0,6,1,"cmdoption-ds_deliver-put-u"],"-c":[0,6,1,"cmdoption-ds_deliver-put-c"],"-d":[0,6,1,"cmdoption-ds_deliver-put-d"],"-f":[0,6,1,"cmdoption-ds_deliver-put-f"],"-o":[0,6,1,"cmdoption-ds_deliver-put-o"],"-p":[0,6,1,"cmdoption-ds_deliver-put-p"],"-pw":[0,6,1,"cmdoption-ds_deliver-put-pw"],"-u":[0,6,1,"cmdoption-ds_deliver-put-u"]},cli_code:{crypto_ds:[3,0,0,"-"],data_deliverer:[1,0,0,"-"],ds_deliver:[0,0,0,"-"],exceptions_ds:[2,0,0,"-"],file_handler:[3,0,0,"-"],s3_connector:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["std","cmdoption","program option"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"std:cmdoption"},terms:{"404":1,"65536":3,"break":0,"byte":[1,3],"class":[1,3],"default":[0,1,3],"final":[1,3],"function":3,"import":3,"int":[1,3],"new":1,"public":[1,3],"return":[1,2,3],"true":[0,1,3],"while":[1,3],And:0,Not:0,The:[0,1,3],_dsuser:3,about:[0,3],access:[1,2],add:2,aead_decrypt_chacha:3,aead_encrypt_chacha:3,after:1,again:1,all:[0,1,3],alreadi:1,arg:0,argument:3,attent:2,base:[1,2,3],being:1,belong:3,bool:[1,3],botocor:1,break_on_fail:1,bucket:[0,1,2],bucketnam:1,bug:1,cancel:1,chacha20:3,check:[1,3],check_last_nonc:3,chunk:3,chunk_siz:3,ciphertext:3,cli:4,cli_cod:[1,2,3],client:1,clienterror:1,command:[0,4],common:3,commun:1,compon:[3,4],compress:[1,3],compress_fil:3,config:0,connect:4,connector:1,consol:2,construct:3,contain:[0,1],continu:1,convert:3,correct:3,could:3,creat:[1,3],cred:[0,1],crypto_d:3,cryptographi:4,current:[1,3],curv:3,custom:4,data:[0,2,3],data_deliver:1,databas:[1,3],datadeliver:1,dataexcept:1,decompress:[1,3],decompress_fil:3,decrypt:[1,3],del_priv_kei:3,delet:[1,3],delete_item:1,deliv:1,deliver:4,deliveri:[0,2,3],deliverysystemexcept:[1,2,3],deni:1,deriv:[1,3],describ:3,dict:[1,3],dictionari:1,diffi:3,directori:1,docstr:0,doesnt:1,don:3,download:[0,1,2,3],ds_deliv:4,dsuser:1,each:3,ecdh:3,ecdhkei:3,ellipt:3,encrypt:[1,3],end:3,enter:3,error:[1,3,4],etc:[0,1,2,3],exampl:0,except:[1,2],exceptions_d:2,exist:1,facil:0,fail:[0,1,3],failur:1,fals:[0,1],file:[0,1,4],file_delet:3,file_exists_in_bucket:1,file_handl:3,file_info:3,file_read:3,file_writ:3,filehandl:3,fileinfo:1,filenam:3,finalize_deliveri:1,finish:[1,3],finsh:1,first:3,folder:[0,1,3],format:3,found:[1,3],from:[0,1,3],gen:3,gener:3,generate_encryption_kei:3,get:[1,3],get_project_priv:3,get_root_path:3,give:3,handl:[1,4],handler:3,hellman:3,here:0,hex:3,how:0,ietf:3,ina:0,incl:3,includ:3,index:4,info:[1,3],inform:[0,1,3],initi:3,instansti:1,integr:1,interfac:[0,4],is_compress:3,item:1,keep:1,kei:[1,3],kept:3,last:3,last_nonc:3,len:3,line:[0,4],log:1,logfil:1,logger:1,login:1,magic:3,main:1,match:3,messag:[1,2,3],method:1,modul:4,more:2,multithread:1,name:[1,3],need:[1,3],nobreak:0,nonc:3,none:[1,3],note:1,number:3,object:[1,3],onc:3,onli:[0,3],oper:[1,3],option:0,origin:1,oserror:[1,3],overwrit:[0,1],own:3,owner:[0,1],pad:2,page:4,pair:3,paramet:[1,2,3],password:[0,1,3],path:[0,1,3],path_bas:3,path_info:1,pathfil:[0,1],pathlib:[1,3],peer:3,peer_publ:3,plaintext:3,poly1305:3,portal:[0,1,2],prep_upload:1,prepar:1,printout:[1,2],printout_error:2,privat:[1,3],privatekei:3,process:[1,4],process_fil:3,progress:1,proj_id:3,project:[0,1,3],project_id:1,project_own:1,projid:3,public_to_hex:3,put:[1,3],rais:[1,3],ratifi:3,read:3,regard:[1,2],relat:[1,2,3],remot:1,represent:3,requir:[0,1,3],resourc:[1,2],respons:3,reverse_process:3,rfc7539:3,s3_connector:1,s3connector:1,s3error:[1,2],s3project:1,safespr:1,salt:[1,3],salt_:3,save:3,search:[1,4],secret:3,session:1,set:[1,3],set_progress:1,share:[1,3],should:[0,1],signatur:3,singl:3,size:[1,3],some:0,spec:1,specif:3,specifi:1,stage:1,start:1,statu:1,storag:[1,2],str:[1,2,3],stream:3,string:3,success:[1,3],symmetr:3,system:[0,1,2,3],tempdir:3,temporari:1,thei:3,thi:0,time:3,to_print:1,todo:0,track:1,tupl:[1,3],two:0,type:[1,2,3],updat:1,update_deliveri:1,update_progress_bar:1,updinfo:1,upload:[0,1,2],usabl:0,use:[0,1],used:[1,3],user:[1,3],usernam:[0,1,3],using:3,wait:1,which:[1,3],write:[0,3],wrong:3,xception:2,yield:3},titles:["CLI","Data Delivery","Custom Error Handling","File processing","Welcome to Data Delivery System\u2019s documentation!","cli_code"],titleterms:{cli:0,cli_cod:5,connect:1,cryptographi:3,custom:2,data:[1,4],deliver:1,deliveri:[1,4],document:4,ds_deliv:0,error:2,file:3,get:0,handl:[2,3],indic:4,process:3,put:0,system:4,tabl:4,welcom:4}})