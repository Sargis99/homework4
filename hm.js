 const astgh = function (k) {
	if(k<=0)
	{
		return "";
	}
    return "*"+astgh(k-1);
  };

 
   const bacat = function (l) {
    if (l <=0) {
       return "";
    }
    return " " +bacat(l-1) ;
  };
  const miacum = function (x,z,y) {
    if (x <= 0) {
       return;
    }
          console.log(bacat(y)+astgh(z));
			miacum((x-1),(z-2),(y+1));
  };
   
  const erankyun= function(n) {
       miacum(n,2*n-1,0);
  }
erankyun(7);
/////////////////////////////////////
 const power=function(n,m) {
  if (m === 0) {
    return 1;
  }
if(n>1){
  return n * power(n,m-1);
}
};
const result=power(8,2);

console.log(result);
/////////////////////////////////// 
const a=function(str,b){
	if(b===0){return " ";}
return str[b-1]+a(str,b-1);
};
const kp=function(str){
	const b=str.length;
	return a(str,b); 
};
console.log(kp("Mashok"));
////////////////////////////////////
const star=function(k){
	if(k<=0){
		return " ";
	}
	if(k%2!=0)
	{
		return " "+ star(k-1);
	}
	else{
		return "*"+star(k-1);
	}
};
const probel=function(m){
if(m%2!=0){
	return "";
}
else{
	return " ";
}
};
const kpcnel=function(x,y,z){
	if(z<=0){return " ";}
	console.log(probel(y)+star(x));
	kpcnel(x,y-1,z-1);
}
const checkbox=function(n){
	if(n%2!=0){
		kpcnel(2*n,n,n);
	}
	else{
		kpcnel(2*n,n-1,n);
	}
};
checkbox(6);/////////////////////////////////
const kpic=function(t){
		const space=function(x){
			if(x<=0){return "";}
			return " "+space(x-1);
		};
		const spase1=function(y){
			if(y<=0){return "";}
			return " "+spase1(y-1);
		};
		const drosh=function(u){
			if(u<=0){
					return "";
			}
			return("*"+drosh(u-1));
		};
		const j=function(l,p){
			if(l<=0){
				return "";
			}
			console.log(space(p)+drosh(p));
			j(l-1,p);
		};
		j(3,t/2);
		const a=function(b,c,d){
			if(c<=0){return "";}
			console.log(space(b)+"*"+spase1(d)+"*");
			a(b,c-1,d+1);
			if(c===2){
				const f=function(h){
					if(h<=0){return "";}
					return "*"+f(h-1);
				};
				console.log(space(b)+f(b/2+1));
			}
		};	
		const k=function(l){
			if(l%2===0)
			return a(l,l/2,0);
		else
			return a(l,(l+1)/2,0);
		}
		k(t);
		console.log(space(t)+"*");
		const astgh = function (k) {
			if(k<=0)
			{
				return "";
			}
			return "*"+astgh(k-1);
		  };

		 
		   const bacat = function (l) {
			if (l <=0) {
			   return "";
			}
			return " " +bacat(l-1) ;
		  };
		  const miacum = function (x,z,y) {
			if (x <= 0) {
			   return;
			}
				  console.log(bacat(y)+astgh(z));
					miacum((x-1),(z-2),(y+1));
		  };
		   
		  const erankyun= function(n) {
			   miacum(n/4,2*n-1,0);
		  }
		erankyun(t);
};
kpic(20);
	
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	