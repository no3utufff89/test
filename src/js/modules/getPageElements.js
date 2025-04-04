export const getPageElements = () => {
    const breadCrumbLinks = [...document.querySelectorAll('.bread-crumbs__link')];
    const breadCrumbElems = [...document.querySelectorAll('.bread-crumbs__item')];
    const characteristicsBtns = [...document.querySelectorAll('.characteristics__btn_pc')];
    const infoItemHeader = [...document.querySelectorAll('.info-item__header')];
    const deliveryItem = [...document.querySelectorAll('.delivery-item')];
    const infoItemContent = [...document.querySelectorAll('.info-item__content')];
    return {
        breadCrumbLinks,
        breadCrumbElems,
        characteristicsBtns,
        infoItemHeader,
        deliveryItem,
        infoItemContent,
    };
};
