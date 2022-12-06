import nerdamer from "nerdamer/all.min";

export function abs(x){
    if(x<0){return -x;}
    return x
}


export function calcBiseccion(a,b,func){
    let Xc,Yc;
    let Xa = a;
    let Xb = b;
    let x = Xa;
    let Ya = eval(func)
         x= Xb;
    let Yb= eval(func);
    console.log(Ya,Yb);
    if((Ya*Yb)>0){
        return 0;
    }else{
        let N=0;
        while (1){
            N=N+1;   
            Xc=(Xa+Xb)/2;
            x=Xc;
            Yc= eval(func);
            if ((abs(Xa-Xb))<0.00001){
                return Xa;
            }else if((Ya*Yc)<0){
                Xb=Xc;
            }else if ((Yb*Yc)<0){
                Xa=Xc;
            }
        }
         
    }
}

export function calcPuntoFijo(a,func){
    let XAnterior,x,ErrorA;
    let Y = func;
    let Xf = a;
    let n = 1;
    let Error = 0;
        while (1){
            XAnterior=Xf;
            x=Xf;
            Xf=eval(Y);
            ErrorA = Error;
            Error = abs(XAnterior-Xf);
            n=n+1;
            if (n>5){
                break
            }
        }
    if(Error>ErrorA){
        console.log("true");
        return {Error,converge:true};
    }

    console.log("false");
    return {Error,converge:false};;

    
}

export function calcNewtonRaphson(a,func){
    let XAnterior,x,ErrorA,Xy,Xyp;
    let Y = func;
    let Yp = nerdamer(`diff(${Y},x)`).text();
    console.log(Yp);
    let Xf = a;
    let Error = 0;
        while (1){
            XAnterior=Xf;
            x=Xf;
            Xy=eval(Y);
            Xyp=eval(Yp);
            console.log(Xyp);
            Xf=Xf-(Xy/Xyp);
            ErrorA = Error;
            Error = abs(XAnterior-Xf);
            if (abs(XAnterior-Xf)<0.00001){
                return Xf;
            }
        }

    
}

export function calcIntegracion(a,b,c,func){
    let x,Y1,Y2;
    let Y = func;
    let Min = a;
    let Max = b;
    let R = [];
    let Subin = c;
    let h=(Max-Min)/(Subin);
    let Puntos = [Min];
    for (let i = h; Max - Min > Math.round(i,2); i+=h) {
        Puntos.push(Min + i);
    }
    Puntos.push(Max);
    let i=0;
    let Resultado=0;
    let SubinArray = [];

    while (true){
        x = Puntos[i];
        Y1 = eval(Y);
        x = Puntos[i+1];
        Y2 = eval(Y);
        R[i] = (Puntos[i+1]-Puntos[i])*((Y1+Y2)/2);
        console.log(Puntos,R)
        i=i+1;
        if (i==(Subin+1)){
            for (let i = 0; Subin > i; i++) {
                SubinArray.push(i);
            }
            console.log(SubinArray,R);
            SubinArray.forEach((value)=>{
                if(!isNaN(value)){
                    console.log(value);
                    Resultado = Resultado+R[value];
                }
            });
            return Resultado;
        }
            
    }
            
}

export function calcDiferenciacion(a,b,func){
    let Y = func;
    let X0 = a;
    let h = b;
    let x = X0;
    let Y1 = eval(Y);
    x = X0 + (h/2);
    let Y2 = eval(Y);
    x = X0 - (h/2);
    let Y3 = eval(Y);

    let M1 = (Y1-Y3)/(h/2);
    let M2 = (Y2-Y1)/(h/2);
    let M3 = (Y2-Y3)/h;
            
    return {
        M1,
        M2,
        M3
    }
}

export function calcLagrange(first,second){
    let firstPol = first.split(',');
    let secondPol = second.split(",");
    let polinomio = "";
    for (let i = 0; i < firstPol.length; i++) {
       let numerador = '';
       let denominador = 1;
        for (let j = 0; j < firstPol.length; j++) {
         if(j != i){
            numerador = numerador + `(x - ${firstPol[j]})`;
            denominador *= (firstPol[i] - firstPol[j]); 
         }
        }
        if(denominador !== 0){
            let terminoL = `${numerador}/${denominador}`;
            polinomio += `${secondPol[i]}*${terminoL} + `;
        }
    }
    const polCompleto =  polinomio.slice(0,-3)
    polinomio = nerdamer(`${polCompleto}`).text(); 
    return polinomio;
}

export function calcGaussSeidel(primero,segundo,tercero,inicial,iteraciones){
    let F1 = primero;
    let F2 = segundo;
    let F3 = tercero;
    let X0 = inicial.split(",");
    let Iteraciones = iteraciones;
    let X = nerdamer(`solve(${F1}, x)`).text(); 
    let Y = nerdamer(`solve(${F2}, y)`).text(); 
    let Z = nerdamer(`solve(${F3}, z)`).text(); 
    console.log(X,Y,Z);
    let x=X0[0];
    let y=X0[1];
    let z=X0[2];
    let sumX = [];
    let sumY = [];
    let sumZ = [];
    for (let i = 0; i < Iteraciones; i++) {
        console.log("iteraciones #",i);
        x = eval(X);
        y = eval(Y);
        z = eval(Z);
        sumX.push(x);
        sumY.push(y);
        sumZ.push(z);
    }

    return {
        sumX,
        sumY,
        sumZ
    }

}