import WebService from '../../../lib/webservice/WebService';

const DistrictsAPIService = {
    getDistrictsListApi: () => {
        return WebService.call('/api/v1/leoDistrict', 'GET');
    },
    getRegionsListApi: (districtId) => {
        return WebService.call('/api/v1/leoDistrict/' + districtId + '/regions', 'GET');
    },
    getDistrictDetailsApi: (districtId) => {
        return WebService.call('/api/v1/leoDistrict/' + districtId + '?includedirectory=true', 'GET');
    },
    getSaveDistrictDetailsAPI: (districtData) => {
        return WebService.call('/api/v1/leoDistrict/' + districtData.id, 'PATCH', districtData);
    },
};

export default DistrictsAPIService;
