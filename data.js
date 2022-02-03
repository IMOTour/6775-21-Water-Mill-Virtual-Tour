var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0186973765257896,
        "pitch": 0.14319193559650145,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 1.5304263691121953,
          "pitch": 0.1977713263158538,
          "rotation": 0,
          "target": "1-entrance-close"
        },
        {
          "yaw": 1.0718658331976876,
          "pitch": -0.04570877996110667,
          "rotation": 0,
          "target": "11-above-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-close",
      "name": "Entrance-close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.688606930932318,
        "pitch": -0.053997569606627493,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 2.6106698469691354,
          "pitch": -0.03374357903469871,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.8795962657994707,
          "pitch": 0.16491494683379848,
          "rotation": 0,
          "target": "2-front"
        },
        {
          "yaw": -1.3493703535697819,
          "pitch": 0.10147616634599821,
          "rotation": 0,
          "target": "6-main-door"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.166802039753044,
        "pitch": -0.10231118451780397,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 0.7109571567260868,
          "pitch": -0.09875332716676155,
          "rotation": 0,
          "target": "1-entrance-close"
        },
        {
          "yaw": -2.977892698663535,
          "pitch": -0.03640133211852614,
          "rotation": 5.497787143782138,
          "target": "3-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9121271952815277,
        "pitch": 0.05968152430205009,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 2.5346964604640165,
          "pitch": -0.03525977675360714,
          "rotation": 0.7853981633974483,
          "target": "2-front"
        },
        {
          "yaw": -1.019348395436463,
          "pitch": 0.1443213316126073,
          "rotation": 0,
          "target": "4-water-side-duct"
        },
        {
          "yaw": -2.5769619684762617,
          "pitch": -0.08259995118183916,
          "rotation": 0.7853981633974483,
          "target": "10-end-of-water-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-water-side-duct",
      "name": "Water-side duct",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5192393410567959,
        "pitch": -0.1364098471566102,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 1.0471514913220936,
          "pitch": -0.043222133013792075,
          "rotation": 3.9269908169872414,
          "target": "5-side-duct-start"
        },
        {
          "yaw": -2.01614252569437,
          "pitch": 0.23335186736684577,
          "rotation": 0,
          "target": "3-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-side-duct-start",
      "name": "Side duct start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9053895494720763,
        "pitch": 0.05683954695433968,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.6459925446346197,
          "pitch": 0.24932398907474607,
          "rotation": 0,
          "target": "4-water-side-duct"
        },
        {
          "yaw": -0.4729682257927781,
          "pitch": -0.5299502325549952,
          "rotation": 3.9269908169872414,
          "target": "13-water-control-box"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-door",
      "name": "Main door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2273409881374846,
        "pitch": 0.051531949140175115,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.9142906709684304,
          "pitch": 0.11695884956999336,
          "rotation": 0,
          "target": "1-entrance-close"
        },
        {
          "yaw": 0.32788699298936663,
          "pitch": 0.013140569837363003,
          "rotation": 0,
          "target": "7-inside-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-inside-close",
      "name": "Inside-close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5576992564385108,
        "pitch": 0.05968152430205187,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -1.593871264422841,
          "pitch": 0.07767086380128241,
          "rotation": 0,
          "target": "8-inside-far"
        },
        {
          "yaw": 1.0420534756176014,
          "pitch": 0.13197272710354468,
          "rotation": 0,
          "target": "6-main-door"
        },
        {
          "yaw": 2.923001249915237,
          "pitch": -0.005501468492145278,
          "rotation": 0,
          "target": "9-water-duct-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-inside-far",
      "name": "Inside far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8408433847635095,
        "pitch": 0.2063342539689632,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 1.0463794169093283,
          "pitch": 0.36709905151120736,
          "rotation": 0,
          "target": "7-inside-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-water-duct-bridge",
      "name": "Water duct bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09162978572969926,
        "pitch": 0.011367909390868292,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 1.8093959948851719,
          "pitch": 0.27881310957086924,
          "rotation": 0,
          "target": "7-inside-close"
        },
        {
          "yaw": 0.8531048341042791,
          "pitch": 0.20840225921964262,
          "rotation": 4.71238898038469,
          "target": "10-end-of-water-bridge"
        },
        {
          "yaw": 3.016101922201928,
          "pitch": 0.04137315168059352,
          "rotation": 0,
          "target": "11-above-entrance"
        },
        {
          "yaw": -0.9001021089608443,
          "pitch": -0.10338431902125045,
          "rotation": 0,
          "target": "12-water-bridge-up"
        },
        {
          "yaw": -0.327233864911765,
          "pitch": -0.37736753156038105,
          "rotation": 3.141592653589793,
          "target": "14-middle-bridge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-end-of-water-bridge",
      "name": "End of water bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7935834769824535,
        "pitch": 0.08620573908876672,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": 1.7435232995935745,
          "pitch": -0.00914781011297272,
          "rotation": 0,
          "target": "9-water-duct-bridge"
        },
        {
          "yaw": -2.051034090159227,
          "pitch": 0.42411395180698364,
          "rotation": 0,
          "target": "3-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-above-entrance",
      "name": "Above entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9026693030871975,
        "pitch": 0.43467598070447444,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.4174039886561367,
          "pitch": 0.12644461656005568,
          "rotation": 10.210176124166829,
          "target": "10-end-of-water-bridge"
        },
        {
          "yaw": -3.0842537229740543,
          "pitch": 0.24847983443651422,
          "rotation": 0,
          "target": "9-water-duct-bridge"
        },
        {
          "yaw": -1.0272287286371444,
          "pitch": 0.2951692476931278,
          "rotation": 3.141592653589793,
          "target": "6-main-door"
        },
        {
          "yaw": 0.6587841162224635,
          "pitch": 0.14802113171954367,
          "rotation": 3.141592653589793,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-water-bridge-up",
      "name": "Water bridge-up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9327786467593544,
        "pitch": 0.5492948262709305,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.4712487954066944,
          "pitch": 0.42343424088920756,
          "rotation": 0,
          "target": "9-water-duct-bridge"
        },
        {
          "yaw": 1.3007090019661902,
          "pitch": -0.11371516833953166,
          "rotation": 10.210176124166829,
          "target": "13-water-control-box"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-water-control-box",
      "name": "Water control box",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2295587914233543,
        "pitch": 0.2751702773142295,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -2.524592232003929,
          "pitch": 0.505812893448546,
          "rotation": 0,
          "target": "12-water-bridge-up"
        },
        {
          "yaw": -2.9789022352669967,
          "pitch": 0.2349866702119261,
          "rotation": 0,
          "target": "14-middle-bridge"
        },
        {
          "yaw": 1.7359060042883616,
          "pitch": 0.4116987616144563,
          "rotation": 3.141592653589793,
          "target": "5-side-duct-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-middle-bridge",
      "name": "Middle bridge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9844865997973002,
        "pitch": 0.41649976538046474,
        "fov": 1.5630875412442984
      },
      "linkHotspots": [
        {
          "yaw": -1.3592431636123106,
          "pitch": 0.2578502114580452,
          "rotation": 2.356194490192345,
          "target": "11-above-entrance"
        },
        {
          "yaw": -2.880769469937011,
          "pitch": 0.5429003215094319,
          "rotation": 3.141592653589793,
          "target": "3-back"
        },
        {
          "yaw": -1.4427436981971447,
          "pitch": 0.669618618200019,
          "rotation": 2.356194490192345,
          "target": "9-water-duct-bridge"
        },
        {
          "yaw": 0.687507398268913,
          "pitch": -0.007209014625701116,
          "rotation": 2.356194490192345,
          "target": "13-water-control-box"
        },
        {
          "yaw": 1.4193209416496835,
          "pitch": 0.4010337378260864,
          "rotation": 3.9269908169872414,
          "target": "5-side-duct-start"
        },
        {
          "yaw": 0.18223922560948758,
          "pitch": 0.2652291985249171,
          "rotation": 1.5707963267948966,
          "target": "12-water-bridge-up"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
