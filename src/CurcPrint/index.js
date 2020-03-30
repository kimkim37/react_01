import React, { useEffect, useContext } from 'react';
import { Layout, Modal } from "antd";
import apiClassificationCodeForTerm from "./api/apiClassificationCodeForTerm";
import { Observer, inject, } from 'mobx-react';
import Toolbar from "./Toolbar";
import SearchForm from "./SearchForm";
import SearchContext, { SearchProvider } from "./Context";
import GridStudentStatus from "./Grid/GridStudentStatus";
import Iframe from 'react-iframe'
import * as common from '../../../../settings/common'
// 학과별 교육과정표 출력

const { Content } = Layout;

function LECTURELectureGuideCurcPrint({ commonStore, option }) {
    const { state, setState, actions: { callTermApi, callCollegeApi, callGradeApi } } = useContext(SearchContext);

    const handleCancel = e => {
        setState(prev => ({
            ...prev,
            visible: false,
        }))
    };

    useEffect(() => {
        const profcd = JSON.parse(localStorage.getItem("loginInfo")) ? JSON.parse(localStorage.getItem("loginInfo")).USERID.trim() : null;  // 교수코드
        const dept_code = JSON.parse(localStorage.getItem("loginInfo")) ? JSON.parse(localStorage.getItem("loginInfo")).DEPTCD : null;  // 교수대학코드
        const profNm = JSON.parse(localStorage.getItem("loginInfo")) ? JSON.parse(localStorage.getItem("loginInfo")).USERNAME : null;  // 교수이름
        const boundary = option.boundary;

        setState(prev => ({
            ...prev,
            profcd,
            dept_code,
            profNm,
            boundary,
        }))
    }, []);

    useEffect(() => {
        commonStore.callSysYearApi();
        callTermApi();
        callCollegeApi();
        callGradeApi();
    }, []);

    return (
        <Observer>
            {() => (
                <Layout className="layout" style={{ backgroundColor: "#FFF" }}>
                    <Toolbar />
                    <Content style={{ backgroundColor: '#FFF' }}>
                        <SearchForm />

                        <GridStudentStatus />
                    </Content >

                </Layout >
            )
            }
        </Observer >
    );
}

export default inject("commonStore")(({ commonStore, option }) => {
    return (
        <SearchProvider>
            <LECTURELectureGuideCurcPrint commonStore={commonStore} option={option} />
        </SearchProvider>
    );
});