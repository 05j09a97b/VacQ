const Hospital = require('../models/Hospital');
//@desc Get all hospitals
//@route Get /api/v1/hospitals
//@access public
exports.getHospitals=async (req,res,next)=>{
    try{
        const hospitals = await Hospital.find();
        res.status(200).json({success:true, count: hospitals.length, data: hospitals});
    }catch(err){
        res.status(400).json({success:false});
    }
    
}

//@desc Get Single hospitals
//@route Get /api/v1/hospitals/:id
//@access public
exports.getHospital= async (req,res,next)=>{
    try{
        const hospital = await Hospital.findById(req.params.id);

        if(!hospital)
            return res.status(400).json({success:false});

        res.status(200).json({success:true,data: hospital});

    } catch(err){
        res.status(400).json({success:false});
    }
    
}

//@desc Create a hospitals
//@route Post /api/v1/hospitals
//@access private
exports. createHospital= async(req,res,next)=>{
    const hospital = await Hospital.create(req.body);
    res.status(201).json({success:true,data:hospital});
}

//@desc Update Single hospitals
//@route Put /api/v1/hospitals/:id
//@access Private
exports.updateHospital= async (req,res,next)=>{
    try{
        const hospital = await Hospital.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators:true

        })
        if(!hospital)
            res.status(400).json({success:false});
        
        res.status(200).json({success:true,data:hospital});

    }catch(err){
        res.status(400).json({success:false});
    }
    
} 

//@desc Delete Single hospitals
//@route Delete /api/v1/hospitals/:id
//@access Private
exports.deleteHospital= async (req,res,next)=>{
    try{
        const hospital = await Hospital.findByIdAndDelete(req.params.id);
        if(!hospital){
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data: {}});
    }catch(err){
        res.status(400).json({success:false});
    }
    
}