export const FilterDistricts = (stateId, districts) => {
    return districts.filter(d => d.stateId == stateId);
}

export const FilterTalukas  = (districtId, talukas) => {
    return talukas.filter(d => d.districtId == districtId);
}