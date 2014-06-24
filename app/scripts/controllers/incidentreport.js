'use strict';

angular.module('projectmgrApp')
  .controller('IncidentreportCtrl', ['$scope', '$location', '$routeParams','Api', 
    function ($scope, $location, $routeParams, Api){
      $scope.report = {project_id : $routeParams["id"]};

      $("#reportForm").validate({
        rules: {
          typeTxt : {
            required: true
          },
          yourNameTxt : {
            required: true,
            maxlength: 100
          },
          jobTitleTxt : {
            required: true
          },
          injuryDateTxt : {
            required: true,
            maxlength: 100
          },
          injuryTimeTxt : {
            required: true,
            maxlength: 100
          },
          witnessesTxt : {
            required: true,
            maxlength: 500
          },
          locationTxt : {
            required: true,
            maxlength: 100
          },
          circumstancesTxt : {
            required: true,
            maxlength: 1000
          },
          descriptionTxt : {
            required: true,
            maxlength: 1000
          },
          injuriesTypeTxt : {
            required: true,
            maxlength: 1000
          },
          ppeTxt : {
            required: true,
            maxlength: 100
          },
          assistanceProvidedTxt: {
            required: true,
            maxlength: 1000
          }
        },
        highlight: validateUtils.highlight,
        unhighlight: validateUtils.unhighlight,            
        errorPlacement: validateUtils.errorPlacement,
        submitHandler: function() {
          alert("success");
        }
      });
  }]);


// report_type
// your_name
// job_title
// injury_date
// injury_time
// witnesses
// location
// circumstances
// event_discription
// injuries_type
// ppe_used
// medical_assistance_provided
// project_id 