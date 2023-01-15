export const allFilter= (state,price,color,gender,type)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))
    // console.log(filterPrice)
    let filterColor;
     color?.forEach(el=>{let x=filterPrice.filter(item=>item.color==el)
        filterColor=[...x]
    })
    //  console.log(filterColor)
    let filterGender;
    gender?.forEach(el=>{let x=filterColor.filter(item=>item.gender==el)
      filterGender=[...x]
  })

   let filterType;

   type?.forEach(el=>{let x=filterGender.filter(item=>item.type==el)
    filterType=[...x]
})

  return filterType
}


export const Price_Col_Gen= (state,price,color,gender)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))
    // console.log(filterPrice)
    let filterColor;
     color?.forEach(el=>{let x=filterPrice.filter(item=>item.color==el)
        filterColor=[...x]
    })
    //  console.log(filterColor)
    let filterGender;
    gender?.forEach(el=>{let x=filterColor.filter(item=>item.gender==el)
      filterGender=[...x]
  })
   return filterGender

}

export const Price_Col_Type= (state,price,color,type)=>{

    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))
    // console.log(filterPrice)
    let filterColor;
     color?.forEach(el=>{let x=filterPrice.filter(item=>item.color==el)
        filterColor=[...x]
    })
    //  console.log(filterColor)
    let filterType;

   type?.forEach(el=>{let x=filterColor.filter(item=>item.type==el)
    filterType=[...x]
})
   return filterType
}

export const Price_Type_Gender=(state,price,type,gender)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))

    let filterType;
    type?.forEach(el=>{let x=filterPrice.filter(item=>item.type==el)
        filterType=[...x]
    })

    let filterGender;
    gender?.forEach(el=>{let x=filterType.filter(item=>item.gender==el)
      filterGender=[...x]
  })

  return filterGender


    
}

export const gender_col_type= (state,gender,color,type)=>{
    let filterGen;
     gender.forEach(gen=>{let x= state?.constData?.filter(el=>el.gender==gen)
        filterGen=[...x]   
    })
    console.log("amit")
console.log(filterGen)
    let filterColor;
     color?.forEach(el=>{let x=filterGen.filter(item=>item.color==el)
        filterColor=[...x]
    })

    let filterType;
    type?.forEach(el=>{let x=filterColor.filter(item=>item.type==el)
        filterType=[...x]
    })
     
    return filterType
}

export const Price_Col= (state,price,color)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))

    let filterColor;
    color?.forEach(el=>{let x=filterPrice.filter(item=>item.color==el)
       filterColor=[...x]
   })

   return filterColor


}

export const Price_Gender= (state,price,gender)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))

    let filterGender;
    gender?.forEach(el=>{let x=filterPrice.filter(item=>item.gender==el)
        filterGender=[...x]
   })

   return filterGender

}

export const Price_Type= (state,price,type)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))

    let filterType;
    type?.forEach(el=>{let x=filterPrice.filter(item=>item.type==el)
        filterType=[...x]
    })

    return filterType
}

export const Color_Gender= (state,color,gender)=>{
    let filterGen;
     gender.forEach(gen=>{let x= state?.constData?.filter(el=>el.gender==gen)
        filterGen=[...x]   
    })

    let filterColor;
    color?.forEach(el=>{let x=filterGen.filter(item=>item.color==el)
       filterColor=[...x]
   })

   return filterColor


}

export const Color_Type= (state,color,type)=>{
    let filterType;
    type.forEach(item=>{let x= state?.constData?.filter(el=>el.type==item)
        filterType=[...x]   
   })
 
   let filterColor;
   color?.forEach(el=>{let x=filterType.filter(item=>item.color==el)
      filterColor=[...x]
  })

  return filterColor

}

export const Gender_Type= (state,gender,type)=>{
    let filterGen;
    gender.forEach(gen=>{let x= state?.constData?.filter(el=>el.gender==gen)
       filterGen=[...x]   
   })

   let filterType;
   type?.forEach(el=>{let x=filterGen.filter(item=>item.type==el)
       filterType=[...x]
   })

   return filterType

}

export const Price= (state,price)=>{
    let filterPrice= state?.constData?.filter(el=>Number(el.price)>=Number(price[0]) &&  Number(el.price)<=Number(price[1]))
    // console.log(filterPrice)
    return filterPrice
}

export const ColorFilter= (state,color)=>{
    let filterColor;
    color.forEach(col=>{let x= state?.constData?.filter(el=>el.color==col)
        filterColor=[...x]   
   })

   return filterColor
}

export const Gender_Filter=(state,gender)=>{
    let filterGen;
    gender.forEach(gen=>{let x= state?.constData?.filter(el=>el.gender==gen)
       filterGen=[...x]   
   })
   return filterGen
}

export const Type_Filter=(state,type)=>{
    let filterType;
    type.forEach(item=>{let x= state?.constData?.filter(el=>el.type==item)
        filterType=[...x]   
   })
   return filterType
}

export const Alldata= (state)=>{
    let alldata= state?.constData
    return alldata
}