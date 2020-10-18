Search.setIndex({docnames:["cli","delivery","excep","files","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,sphinx:56},filenames:["cli.rst","delivery.rst","excep.rst","files.rst","index.rst"],objects:{"cli_code.crypto_ds":{ECDHKey:[3,1,1,""],get_project_private:[3,4,1,""]},"cli_code.crypto_ds.ECDHKey":{"private":[3,3,1,""],"public":[3,3,1,""],del_priv_key:[3,2,1,"id0"],generate_encryption_key:[3,2,1,"id1"],public_to_hex:[3,2,1,"id2"]},"cli_code.data_deliverer":{DataDeliverer:[1,1,1,""],DeliverySystemException:[1,5,1,""],_DSUser:[1,1,1,""],update_progress_bar:[1,4,1,""]},"cli_code.data_deliverer.DataDeliverer":{"private":[1,3,1,""],"public":[1,3,1,""],_check_ds_access:[1,2,1,""],_check_user_input:[1,2,1,""],_create_progress_output:[1,2,1,""],_data_to_deliver:[1,2,1,""],_finalize:[1,2,1,""],_get_dir_info:[1,2,1,""],_get_download_info:[1,2,1,""],_get_file_info:[1,2,1,""],break_on_fail:[1,3,1,""],bucketname:[1,3,1,""],data:[1,3,1,""],failed:[1,3,1,""],finalize_delivery:[1,2,1,""],get:[1,2,1,""],method:[1,3,1,""],overwrite:[1,3,1,""],prep_upload:[1,2,1,""],project_id:[1,3,1,""],project_owner:[1,3,1,""],put:[1,2,1,""],s3project:[1,3,1,""],set_progress:[1,2,1,""],update_delivery:[1,2,1,""],user:[1,3,1,""]},"cli_code.data_deliverer._DSUser":{id:[1,3,1,""],password:[1,3,1,""],role:[1,3,1,""],username:[1,3,1,""]},"cli_code.exceptions_ds":{DeliverySystemException:[2,5,1,""],S3Error:[2,5,1,""],printout_error:[2,4,1,""]},"cli_code.file_handler":{aead_decrypt_chacha:[3,4,1,""],aead_encrypt_chacha:[3,4,1,""],check_last_nonce:[3,4,1,""],compress_file:[3,4,1,""],decompress_file:[3,4,1,""],file_deleter:[3,4,1,""],file_reader:[3,4,1,""],file_writer:[3,4,1,""],get_root_path:[3,4,1,""],is_compressed:[3,4,1,""],process_file:[3,4,1,""],reverse_processing:[3,4,1,""]},"cli_code.s3_connector":{S3Connector:[1,1,1,""]},"cli_code.s3_connector.S3Connector":{bucket:[1,3,1,""],bucketname:[1,3,1,""],delete_item:[1,2,1,""],file_exists_in_bucket:[1,2,1,""],project:[1,3,1,""],resource:[1,3,1,""],session:[1,3,1,""]},"ds_deliver-get":{"--break-on-fail":[0,6,1,"cmdoption-ds_deliver-get-break-on-fail"],"--creds":[0,6,1,"cmdoption-ds_deliver-get-c"],"--data":[0,6,1,"cmdoption-ds_deliver-get-d"],"--nobreak-on-fail":[0,6,1,"cmdoption-ds_deliver-get-break-on-fail"],"--password":[0,6,1,"cmdoption-ds_deliver-get-pw"],"--pathfile":[0,6,1,"cmdoption-ds_deliver-get-f"],"--project":[0,6,1,"cmdoption-ds_deliver-get-p"],"--username":[0,6,1,"cmdoption-ds_deliver-get-u"],"-c":[0,6,1,"cmdoption-ds_deliver-get-c"],"-d":[0,6,1,"cmdoption-ds_deliver-get-d"],"-f":[0,6,1,"cmdoption-ds_deliver-get-f"],"-p":[0,6,1,"cmdoption-ds_deliver-get-p"],"-pw":[0,6,1,"cmdoption-ds_deliver-get-pw"],"-u":[0,6,1,"cmdoption-ds_deliver-get-u"]},"ds_deliver-put":{"--break-on-fail":[0,6,1,"cmdoption-ds_deliver-put-break-on-fail"],"--creds":[0,6,1,"cmdoption-ds_deliver-put-c"],"--data":[0,6,1,"cmdoption-ds_deliver-put-d"],"--nobreak-on-fail":[0,6,1,"cmdoption-ds_deliver-put-break-on-fail"],"--overwrite":[0,6,1,"cmdoption-ds_deliver-put-overwrite"],"--owner":[0,6,1,"cmdoption-ds_deliver-put-o"],"--password":[0,6,1,"cmdoption-ds_deliver-put-pw"],"--pathfile":[0,6,1,"cmdoption-ds_deliver-put-f"],"--project":[0,6,1,"cmdoption-ds_deliver-put-p"],"--username":[0,6,1,"cmdoption-ds_deliver-put-u"],"-c":[0,6,1,"cmdoption-ds_deliver-put-c"],"-d":[0,6,1,"cmdoption-ds_deliver-put-d"],"-f":[0,6,1,"cmdoption-ds_deliver-put-f"],"-o":[0,6,1,"cmdoption-ds_deliver-put-o"],"-p":[0,6,1,"cmdoption-ds_deliver-put-p"],"-pw":[0,6,1,"cmdoption-ds_deliver-put-pw"],"-u":[0,6,1,"cmdoption-ds_deliver-put-u"]},cli_code:{crypto_ds:[3,0,0,"-"],data_deliverer:[1,0,0,"-"],ds_deliver:[0,0,0,"-"],exceptions_ds:[2,0,0,"-"],file_handler:[3,0,0,"-"],s3_connector:[1,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["std","cmdoption","program option"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"std:cmdoption"},terms:{"404":1,"65536":3,"break":0,"byte":[1,3],"class":[1,3],"default":[0,1,3],"final":[1,3],"function":[0,2,3],"import":3,"int":[1,3],"new":1,"public":[1,3],"return":[1,2,3],"true":[0,1,3],"while":[0,1,3],The:[0,1,3,4],_check_ds_access:1,_check_user_input:1,_create_progress_output:1,_data_to_deliv:1,_dsuser:[1,3],_final:1,_get_dir_info:1,_get_download_info:1,_get_file_info:1,abl:3,about:[1,3],access:[0,1,2,3],add:2,aead_decrypt_chacha:3,aead_encrypt_chacha:3,after:1,again:1,algorithm:3,all:[0,1,3,4],allow:3,alreadi:[0,1,3],also:[1,2,3,4],alwai:0,amount:4,ani:[0,1],api:1,arg:0,argument:[0,3],around:1,attent:2,base:[1,2,3,4],been:[1,3],befor:3,begin:0,being:[0,1],belong:[0,3],bool:[1,3],both:0,botocor:1,break_on_fail:1,bucket:[0,1,2],bucketnam:1,can:[0,1,4],cancel:[0,1],cannot:0,chacha20:3,check:[0,1,3],check_last_nonc:3,chunk:3,chunk_siz:3,ciphertext:3,cli:[1,4],client:1,clienterror:1,cloud:4,command:[0,4],common:3,commun:1,compon:[3,4],compress:[0,1,3],compress_fil:3,connect:4,connector:1,consist:4,consol:[1,2],construct:3,contain:[0,1,2,3],content:1,continu:1,convert:3,correct:[0,1,3],correspond:1,could:3,creat:[1,3],cred:[0,1],credenti:[0,1],cross:1,cryptographi:4,current:[0,1,3,4],curv:3,custom:4,data:[0,2,3],databas:[0,1,3],datadeliver:1,decompress:[1,3],decompress_fil:3,decrypt:[1,3],del_priv_kei:3,delet:[1,3],delete_item:1,deliv:[0,1,4],deliver:4,deliveri:[0,2,3],deliverysystemexcept:[1,2,3],deriv:[1,3],describ:3,develop:4,dict:[1,3],dictionari:1,diffi:3,dir_nam:1,directori:[0,1],do_fail:1,doesnt:1,don:[1,3],download:[0,1,2,3],ds_deliv:4,dsuser:1,duplic:0,each:[3,4],ecdh:3,ecdhkei:3,either:0,ellipt:3,enabl:0,encrypt:[0,1,3],end:3,enter:[1,3],error:[1,3,4],etc:[0,1,2,3],exampl:0,except:[1,2],exist:[0,1],facil:[0,1,4],fail:[0,1,3],failur:[0,1],fals:[0,1],fast:4,few:4,file:[0,1,4],file_delet:3,file_exists_in_bucket:1,file_info:3,file_read:3,file_writ:3,filehandl:3,fileinfo:1,filenam:3,files_in_db:1,finalize_deliveri:1,finish:[1,3],finsh:1,first:3,folder:[0,1,3],follow:4,format:[1,3],found:[1,3],from:[0,1,3],gather:1,gen:3,gener:[3,4],generate_encryption_kei:3,get:[1,3],get_project_priv:3,get_root_path:3,give:3,grant:1,group:4,handl:[0,1,4],handler:3,has:[0,3],have:1,hellman:3,hex:3,ietf:3,in_dir:1,includ:[1,3],independ:0,index:4,individu:[0,1],info:[1,3],inform:[0,1,3],initi:[0,1,3],input:1,instanc:1,instansti:1,instead:1,integr:1,interfac:4,is_compress:3,item:1,iter:1,its:1,json:[0,1],keep:[0,1],kei:[1,3],kept:3,larg:4,larger:4,last:3,last_nonc:3,later:0,len:3,line:4,list:1,log:[0,1],logger:0,login:1,loos:0,magic:3,magic_dict:3,main:0,make:[1,2],mark:1,match:3,max_nonc:3,maximum:3,messag:[1,2,3],method:1,modul:[3,4],more:2,multithread:1,must:0,name:[1,3],need:[1,3],nobreak:0,nonc:3,none:[1,3],number:3,object:[0,1,3],onc:3,one:[0,1],onli:[0,3],oper:[1,3],option:[0,1,4],origin:[0,1],oserror:[1,3],other:0,out:1,overwrit:[0,1],own:3,owner:[0,1],owner_id:[0,1],pad:2,page:4,pair:3,paramet:[1,2,3],pars:3,password:[0,1,3],path:[0,1,3],path_bas:3,path_info:1,pathfil:[0,1],pathlib:[1,3],peer:3,peer_publ:3,perform:[0,1,3],plaintext:3,poly1305:3,portal:[1,2],posixpath:1,prep_upload:1,prepar:1,previou:[0,1],previous:[0,1],print:[1,2],printout:2,printout_error:2,privat:[1,3],privatekei:3,proce:1,process:[0,1,4],process_fil:3,produc:4,progress:[1,4],progressinfo:1,proj_id:3,project:[0,1,3,4],project_id:[0,1],project_own:1,projid:3,public_kei:1,public_to_hex:3,put:[1,3],rais:[1,3],ratifi:3,read:3,readabl:[2,3],real:1,regard:[1,2],relat:[1,2,3],replac:0,represent:3,request:1,requir:[0,3],research:[1,4],resourc:[1,2],respect:1,respons:3,rest:1,result:0,reverse_process:3,rfc7539:3,role:[0,1],s3_id:1,s3connector:1,s3error:[1,2],s3project:1,safespr:1,salt:[1,3],salt_:3,same:[0,3],save:[0,3],search:[1,4],secret:3,secur:4,see:0,separ:1,sequenc:4,session:1,set:[1,3],set_progress:1,share:[1,3],should:[1,3],signatur:3,simpl:4,sinc:3,singl:3,size:[1,3],small:4,space:0,spec:1,specif:[0,3],specifi:[0,1],stage:1,start:1,statu:1,status:1,status_dict:1,step:1,storag:[1,2],store:0,str:[1,2,3],stream:3,string:3,structur:0,success:[1,3],sure:1,symbol:1,symmetr:3,system:[0,1,2,3],tempdir:3,temporari:0,thei:[1,3],them:3,thi:[0,3,4],through:1,throughout:4,time:3,track:1,transform:3,tupl:[1,3],turn:1,two:[1,4],type:[1,2,3],unicod:1,updat:1,update_deliveri:1,update_progress_bar:1,updinfo:1,upload:[0,1,2,3],usabl:[0,3],use:[0,1],used:[0,1,3,4],user:[0,1,3],usernam:[0,1,3],using:[0,3],variabl:3,wai:4,wait:1,web:4,what:3,where:[0,4],whether:[0,1],which:[0,1,2,3],whom:0,within:[0,4],write:3,wrong:3,yield:3,you:0,your:0},titles:["CLI","Data Delivery","Custom Error Handling","File processing","SciLifeLab\u2019s Data Delivery System"],titleterms:{cli:0,connect:1,cryptographi:3,custom:2,data:[1,4],deliver:1,deliveri:[1,4],ds_deliv:0,error:2,file:3,get:0,handl:[2,3],indic:4,process:3,put:0,scilifelab:4,system:4,tabl:4}})