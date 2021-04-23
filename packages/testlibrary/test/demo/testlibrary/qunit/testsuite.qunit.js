sap.ui.define(function() {
	"use strict";

	return {
		name: "QUnit TestSuite for demo.testlibrary",
		defaults: {
			bootCore: true,
			ui5: {
				libs: "sap.ui.core,demo.testlibrary",
				theme: "sap_fiori_3",
				noConflict: true,
				preload: "auto"
			},
			qunit: {
				version: 2,
				reorder: false
			},
			sinon: {
				version: 4,
				qunitBridge: true,
				useFakeTimers: false
			},
			module: "./{name}.qunit"
		},
		tests: {
			// test file for the Example control
			Example: {
				title: "QUnit Test for Example",
				_alternativeTitle: "QUnit tests: demo.testlibrary.Example"
			}
		}
	};

});
