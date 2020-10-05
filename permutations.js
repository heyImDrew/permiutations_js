a=(process.argv).slice(0)
l=a.length
let t,i,m=0
if(l==3)console.log(a[2]);
if(l>3){
    for(i=2;i<l;i++){
        a[i]=a[i].split('').sort()
        let c=0
        for(j=2;j<l;j++){
            if(JSON.stringify(a[i])==JSON.stringify(a[j])) c++; 
        }
        if(c>m){
            m=c;
            t=a[i]
        }
    }
    for(let i=2;i<l;i++){
        if(JSON.stringify(t)==JSON.stringify(a[i])){
            console.log(process.argv[i])}}}